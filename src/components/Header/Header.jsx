import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { HideOnScroll } from '../utils/utils'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'
import { useMediaQuery } from '@material-ui/core'

import {
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../utils/utils'

function Header({
  openSidebarDrawer,
  setOpenSidebarDrawer,
  handleHamburgerMenuClick,
}) {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)
  return (
    <>
      <HideOnScroll>
        <StyledAppBar elevation={isMobileView ? 1 : 0}>
          <StyledToolbar disableGutters>
            <LeftContainer
              isMobileView={isMobileView}
              openSidebarDrawer={openSidebarDrawer}
              setOpenSidebarDrawer={setOpenSidebarDrawer}
              handleHamburgerMenuClick={handleHamburgerMenuClick}
            />
            <MiddleContainer isMobileView={isMobileView} />
            <RightContainer isMobileView={isMobileView} />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>

      {/* Below text only to test if hiding the AppBar works */}
      {/* <div>
        {[...new Array(100)]
          .map(
            () =>  `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </div> */}
    </>
  )
}

export default Header

export const StyledAppBar = styled(AppBar)`
  /* increase specificity to override default indigo color */
  && {
    background-color: white;
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

  background-color: white;
  /* remove the border later */
  border-bottom: 1px solid lightgray;
  padding-left: 16px;
  padding-right: 16px;
`
