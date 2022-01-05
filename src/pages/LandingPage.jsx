import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { ThemeProvider } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { columnBreakpoints } from '../components/Videos/columnBreakpoints'
import {
  useIsMobileView,
  TWO_COL_MIN_WIDTH,
  TWO_COL_MAX_WIDTH,
  THREE_COL_MIN_WIDTH,
  THREE_COL_MAX_WIDTH,
  FOUR_COL_MIN_WIDTH,
  FOUR_COL_MAX_WIDTH,
  SIX_COL_MIN_WIDTH,
  SIX_COL_MAX_WIDTH,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  SHOW_MINI_SIDEBAR_BREAKPOINT,
  MINI_SIDEBAR_WIDTH,
  SHOW_FULL_SIDEBAR_BREAKPOINT,
  FULL_SIDEBAR_WIDTH,
} from '../utils/utils'
import { request } from '../utils/api'
import countries from '../components/ChipsBar/chipsArray'
import InfiniteScroll from 'react-infinite-scroll-component'
import { GridItem } from '../components/Videos/GridItem'
import { useAtom } from 'jotai'
import { userSettingToShowFullSidebarAtom } from '../store'

const Videos = ({
  selectedChipIndex,
  landingPageVideos,
  setLandingPageVideos,
  popularVideosNextPageToken,
  setPopularVideosNextPageToken,
}) => {
  const VIDEOS_PER_QUERY = 24
  const isMobileView = useIsMobileView()
  const [userSettingToShowFullSidebar] = useAtom(
    userSettingToShowFullSidebarAtom
  )

  // total number of videos returned by API query
  const [popularVideosTotalResults, setPopularVideosTotalResults] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const { regionCode: selectedRegionCode } = countries[selectedChipIndex]

  const getPopularVideos = async () => {
    try {
      setIsLoading(true)
      const { data } = await request('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: selectedRegionCode,
          maxResults: VIDEOS_PER_QUERY,
          // initial value is null so should be fine for 1st request
          pageToken: popularVideosNextPageToken,
        },
      })
      setPopularVideosTotalResults(data.pageInfo.totalResults)

      // infinite scroll needs previous page + current page data
      setLandingPageVideos([...landingPageVideos, ...data.items])
      setPopularVideosNextPageToken(data.nextPageToken)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  // get selectedCountry popular videos when app starts and click on another chip
  useEffect(() => {
    getPopularVideos()
  }, [selectedChipIndex])

  // determine if more query needed for infinite scroll
  let shouldGetMoreResults =
    (popularVideosTotalResults - landingPageVideos.length) / VIDEOS_PER_QUERY >=
    1

  return (
    <OuterVideoContainer
      showFullSidebar={userSettingToShowFullSidebar}
    >
      <ThemeProvider theme={columnBreakpoints}>
        <InnerVideoContainer>
          <InfiniteScroll
            dataLength={landingPageVideos.length}
            next={getPopularVideos}
            hasMore={shouldGetMoreResults}
            // overflow: auto from infinite scroll default causes scrolling problem
            style={{ overflow: 'unset' }}
          >
            {/* change from here if remove loading-skeleton */}
            <Grid container spacing={isMobileView ? 0 : 1}>
              {isLoading
                ? [...Array(VIDEOS_PER_QUERY)].map((_, index) => {
                    return <GridItem key={`skeleton-${index}`} />
                  })
                : landingPageVideos.map((video) => {
                    return <GridItem key={video.id} video={video} />
                  })}
            </Grid>
          </InfiniteScroll>
        </InnerVideoContainer>
      </ThemeProvider>
    </OuterVideoContainer>
  )
}

export default Videos

export const OuterVideoContainer = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  padding-top: ${MOBILE_VIEW_HEADER_HEIGHT}px;

  /* 496px */
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  }

  /* 792px */
  @media screen and (min-width: ${SHOW_MINI_SIDEBAR_BREAKPOINT}px) {
    padding-left: ${MINI_SIDEBAR_WIDTH}px;
  }

  /* 1313px */
  @media screen and (min-width: ${SHOW_FULL_SIDEBAR_BREAKPOINT}px) {
    padding-left: ${({ showFullSidebar }) =>
      showFullSidebar ? FULL_SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH}px;
  }
`

const InnerVideoContainer = styled.div`
  /* mobile view has 0 margin */
  margin: 0;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    max-width: ${TWO_COL_MAX_WIDTH}px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${THREE_COL_MIN_WIDTH}px) {
    max-width: ${THREE_COL_MAX_WIDTH}px;
    // from 872 px up there's padding left and right
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: ${FOUR_COL_MIN_WIDTH}px) {
    max-width: ${FOUR_COL_MAX_WIDTH}px;
  }
  /* There's no five columns with MUI Grid 
  @media screen and (min-width: 1952px) {
    max-width: 1804px;
  } */
  @media screen and (min-width: ${SIX_COL_MIN_WIDTH}px) {
    max-width: ${SIX_COL_MAX_WIDTH}px;
  }
`
