import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useMediaQuery } from '@material-ui/core'
import { HideOnScroll } from '../sharedComponents/sharedComponents'
import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'

import {
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../sharedComponents/sharedComponents'

function Header() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT})`)

  return (
    <>
      <HideOnScroll>
        <StyledAppBar elevation={isMobileView ? 1 : 0}>
          <Toolbar>
            <LeftContainer isMobileView={isMobileView} />
            <MiddleContainer isMobileView={isMobileView} />
            <RightContainer isMobileView={isMobileView} />
          </Toolbar>
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
  .MuiToolbar-regular {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
      min-height: ${MOBILE_VIEW_HEADER_HEIGHT};
      height: ${MOBILE_VIEW_HEADER_HEIGHT};
    }

    min-height: ${DESKTOP_VIEW_HEADER_HEIGHT};
    height: ${DESKTOP_VIEW_HEADER_HEIGHT};
  }

  .MuiToolbar-root {
    background-color: white;
    /* remove the border later */
    border-bottom: 1px solid lightgray;
  }

  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
    .MuiToolbar-gutters {
      padding-right: 0;
    }
  }
`
