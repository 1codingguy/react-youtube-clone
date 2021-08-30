import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import RightContainer from './RightContainer'

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-regular {
    min-height: 56px;
    height: 56px;
  }

  .MuiToolbar-root {
    background-color: white;
    /* remove the border later */
    border-bottom: 1px solid lightgray;
  }
`

function DesktopHeader() {
  return (
    <>
      <StyledAppBar elevation={0}>
        <Toolbar>
          <LeftContainer />
          <MiddleContainer />
          <RightContainer />
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default DesktopHeader
