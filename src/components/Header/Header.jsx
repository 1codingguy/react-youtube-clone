import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { HideOnScroll } from '../utils/utils'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'

import {
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../utils/utils'

function Header({
  isMobileView,
  openSidebarDrawer,
  setOpenSidebarDrawer,
  handleHamburgerMenuClick,
}) {
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

const StyledAppBar = styled(AppBar)`
  /* increase specificity to override default indigo color */
  &&{background-color: white};

  .MuiToolbar-regular {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
      /* min-height: ${MOBILE_VIEW_HEADER_HEIGHT}; */
      height: ${MOBILE_VIEW_HEADER_HEIGHT};
    }

    /* min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}; */
    height: ${DESKTOP_VIEW_HEADER_HEIGHT};
  }
`

const StyledToolbar = styled(Toolbar)`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
    padding-left: 0;
    padding-right: 0;
  }

  background-color: white;
  /* remove the border later */
  border-bottom: 1px solid lightgray;
  padding-left: 16px;
  padding-right: 16px;
`
