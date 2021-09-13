import React from 'react'
import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation'

import { FooterIcons as MiniSidebarIcons } from './Footer'

const MiniSidebar = () => {
  return (
    <MiniSidebarContainer>
      <MiniSidebarIcons />
    </MiniSidebarContainer>
  )
}

export default MiniSidebar

const MiniSidebarContainer = styled(BottomNavigation)`
  && {
    // to override default height:56px which also mess up flex-box
    height: auto;
  }
  width: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
