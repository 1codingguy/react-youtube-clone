import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LeftContainer from './LeftContainer/LeftContainer'
import MiddleContainer from './MiddleContainer/MiddleContainer'
import RightContainer from './RightContainer/RightContainer'
import { useMediaQuery } from '@material-ui/core'

import {
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  HideOnScroll,
} from '../utils/utils'
import { textForScrollingTest } from '../utils/textForScrollingTest'

function Header({
  openSidebarDrawer,
  setOpenSidebarDrawer,
  handleHamburgerMenuClick,
}) {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)
  return (
    <>
      <HideOnScroll>
        {/* not sure if color=transparent will affect the look when scroll */}
        <StyledAppBar elevation={isMobileView ? 1 : 0} color="transparent">
          <StyledToolbar disableGutters>
            <LeftContainer
              openSidebarDrawer={openSidebarDrawer}
              setOpenSidebarDrawer={setOpenSidebarDrawer}
              handleHamburgerMenuClick={handleHamburgerMenuClick}
            />
            <MiddleContainer />
            <RightContainer isMobileView={isMobileView} />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>

      {/* Below text only to test if hiding the AppBar works */}
      {/* {textForScrollingTest(isMobileView)} */}
    </>
  )
}

export default Header

export const StyledAppBar = styled(AppBar)`
  && {
    /* background-color: white; */
    opacity: 0.9;
    transition: none !important; // can't override without !important
  }

  .MuiToolbar-regular {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
      min-height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
      height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
    }

    min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
    height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  }
`

const StyledToolbar = styled(Toolbar)`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    padding-left: 0;
    padding-right: 0;
  }

  /* remove the border later */
  border-bottom: 1px solid lightgray;
  padding-left: 16px;
  padding-right: 16px;
  /* background-color: white; */
`
