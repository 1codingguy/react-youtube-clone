import React from 'react'
import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { FooterIcons as MiniSidebarIcons } from '../Footer/FooterIcons'
import { MINI_SIDEBAR_WIDTH, DESKTOP_VIEW_HEADER_HEIGHT } from '../utils/utils'

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
    height: fit-content;
  }
  width: ${MINI_SIDEBAR_WIDTH}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  left: 0;
`
