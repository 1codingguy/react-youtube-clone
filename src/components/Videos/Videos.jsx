import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { ThemeProvider } from '@material-ui/styles'
import VideoCard from './VideoCard'
import { Grid } from '@material-ui/core'
import { columnBreakpoints } from './columnBreakpoints'
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
} from '../utils/utils'
import { request } from '../utils/api'
import {
  selectedChipIndexAtom,
  landingPageVideosAtom,
  nextPageTokenAtom,
  totalResultsAtom,
} from '../../store'
import { useAtom } from 'jotai'
import countries from '../ChipsBar/chipsArray'
import InfiniteScroll from 'react-infinite-scroll-component'

const Videos = () => {
  const VIDEOS_PER_QUERY = 24

  const isMobileView = useIsMobileView()
  const { marginTopToOffset, marginLeftToOffset } = useGlobalContext()

  const [selectedChipIndex] = useAtom(selectedChipIndexAtom)
  const { regionCode: selectedRegionCode } = countries[selectedChipIndex]

  const [landingPageVideos, setLandingPageVideos] = useAtom(
    landingPageVideosAtom
  )
  const [nextPageToken, setNextPageToken] = useAtom(nextPageTokenAtom)

  const [totalResults, setTotalResults] = useAtom(totalResultsAtom)


  const getPopularVideos = async () => {
    try {
      const { data } = await request('/videos', {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          regionCode: selectedRegionCode,
          maxResults: VIDEOS_PER_QUERY,
          // initial value is null so should be fine for 1st request
          pageToken: nextPageToken,
        },
      })
      // console.log(data)
      setTotalResults(data.pageInfo.totalResults)

      // infinite scroll needs previous page + current page data
      setLandingPageVideos([...landingPageVideos, ...data.items])
      setNextPageToken(data.nextPageToken)
    } catch (error) {
      console.log(error)
    }
  }

  // get selectedCountry popular videos when app starts
  // useEffect(() => {
  //   console.log(`in useEffect`)
  //   console.log(`selectedChipIndex: ${selectedChipIndex}`)
  //   console.log(`selectedRegionCode: ${selectedRegionCode}`)

  //   getPopularVideos()
  // }, [selectedChipIndex])

  // logic to determine if more query needed for infinite scroll
  let shouldGetMoreResults = (totalResults - landingPageVideos.length) / VIDEOS_PER_QUERY >= 1

  return (
    <OuterVideoContainer
      marginTopToOffset={marginTopToOffset}
      marginLeftToOffset={marginLeftToOffset}
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
            <Grid container spacing={isMobileView ? 0 : 1}>
              {landingPageVideos &&
                landingPageVideos.map((video) => {
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

const GridItem = ({ video }) => {
  return (
    <Grid
      container
      item
      // not sure if justifyContent is needed if MuiPaper-root had width: 100%, need to test
      justifyContent="center"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <VideoCard video={video} />
    </Grid>
  )
}

const OuterVideoContainer = styled.div`
  /* min-height: 200vh; */
  background-color: #f9f9f9;
  display: inline-block;
  padding-top: ${(props) => props.marginTopToOffset}px;
  padding-left: ${(props) => props.marginLeftToOffset}px;
  /* width: calc(100% - ${(props) => props.marginLeftToOffset}px); */
  width: 100%;
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
// To test the layout when all the data is hard-coded instead of query from YouTube API
// Can be deleted after finished
// const SampleGridItem = () => {
//   return (
//     <Grid
//       container
//       justifyContent="center"
//       item
//       xs={12}
//       sm={6}
//       md={4}
//       lg={3}
//       xl={2}
//     >
//       <VideoCard />
//     </Grid>
//   )
// }

// // after finished styling, turn getKittenVideos() into a function to query initial data/ videos to display when the page first loaded
// // if placing this function in a separated module, setLandingPageVideos needs to be a global state
// const getKittenVideos = async () => {
//   const response = await request('/search', {
//     params: {
//       part: 'snippet',
//       maxResults: 24,
//       q: 'kitten',
//     },
//   })
//   localStorage.setItem('kittenVideos', JSON.stringify(response.data.items))
//   setLandingPageVideos(response.data.items)
// }

// // when app start, either load the kittenVideos in localStorage, or run getKittenVideos() to query data from YouTube API
// useEffect(() => {
//   const storedKittenVideos = JSON.parse(localStorage.getItem('kittenVideos'))
//   if (storedKittenVideos) {
//     // console.log(storedKittenVideos)
//     setLandingPageVideos(storedKittenVideos)
//     // console.log('using stored Videos data')
//   } else {
//     getKittenVideos()
//   }
// }, [])

// // console.log(landingPageVideos)
