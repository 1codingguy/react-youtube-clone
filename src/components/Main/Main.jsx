import React, { useState } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import ChipsBar from '../ChipsBar/ChipsBar'
import LandingPageVideos from '../../pages/LandingPage'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  TWO_COL_MIN_WIDTH,
} from '../../utils/utils'
import SidebarToShow from '../Sidebar/SidebarToShow'
import SearchPage from '../../pages/SearchPage'
import ScrollToTop from '../ScrollToTop'

const Main = () => {
  const [selectedChipIndex, setSelectedChipIndex] = useState(0)
  const [landingPageVideos, setLandingPageVideos] = useState([])
  const [popularVideosNextPageToken, setPopularVideosNextPageToken] =
    useState(null)
  const isInSearchResultsPage = useLocation().pathname === '/results'

  return (
    <StyledMain isInSearchResultsPage={isInSearchResultsPage}>
      <ScrollToTop />
      <SidebarToShow />
      <Switch>
        <Route path='/' exact>
          <ChipsBar
            {...{
              selectedChipIndex,
              setSelectedChipIndex,
              setLandingPageVideos,
              setPopularVideosNextPageToken,
            }}
          />
          <LandingPageVideos
            {...{
              selectedChipIndex,
              setSelectedChipIndex,
              landingPageVideos,
              setLandingPageVideos,
              popularVideosNextPageToken,
              setPopularVideosNextPageToken,
            }}
          />
        </Route>
        <Route path='/results'>
          <SearchPage />
        </Route>
        {/* original YouTube has a 'something went wrong' page instead of redirecting back to the homepage */}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  padding-top: ${({ isInSearchResultsPage }) =>
    isInSearchResultsPage ? 0 : MOBILE_VIEW_HEADER_HEIGHT}px;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding-top: ${({ isInSearchResultsPage }) =>
      isInSearchResultsPage ? 0 : DESKTOP_VIEW_HEADER_HEIGHT}px;
  }
`
