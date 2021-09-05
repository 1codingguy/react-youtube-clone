import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core'

import MiniSidebar from '../Sidebar/MiniSidebar'
import FullWidthSidebar from '../Sidebar/FullWidthSidebar'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Videos from '../Videos/Videos'

import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_BREAKPOINT,
  SHOW_MINI_SIDEBAR,
  SHOW_FULL_SIDEBAR,
} from '../utils/utils'

const Main = () => {
  const showMiniSidebar = useMediaQuery(`(min-width: ${SHOW_MINI_SIDEBAR})`)
  const showFullWidthSidebar = useMediaQuery(
    `(min-width: ${SHOW_FULL_SIDEBAR})`
  )

  return (
    <StyledMain>
      <div className="main-left-container">
        {(showFullWidthSidebar && <FullWidthSidebar />) ||
          (showMiniSidebar && <MiniSidebar />)}
      </div>

      <div className="main-right-container">
        <CategoriesBar />
        <Videos />
      </div>
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
    padding-top: ${MOBILE_VIEW_HEADER_HEIGHT};
    /* min-height: calc(100vh - ${MOBILE_VIEW_HEADER_HEIGHT}); */
    min-height: 100vh;
  }
  padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT};
  /* min-height: calc(100vh - ${DESKTOP_VIEW_HEADER_HEIGHT}); */
  min-height: 100vh;

  display: flex;
`
