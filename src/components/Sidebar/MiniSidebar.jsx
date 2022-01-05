import React from 'react'
import styled from 'styled-components/macro'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { FooterIcons as MiniSidebarIcons } from '../Footer/FooterIcons'
import { MINI_SIDEBAR_WIDTH, DESKTOP_VIEW_HEADER_HEIGHT } from '../../utils/utils'

const MiniSidebar = () => {
  return (
    <MiniSidebarContainer>
      <div className="inner_container">
        <MiniSidebarIcons />
      </div>
    </MiniSidebarContainer>
  )
}

export default MiniSidebar

const MiniSidebarContainer = styled(BottomNavigation)`
  && {
    // to override default height:56px which also mess up flex-box
    height: 100%;
    width: ${MINI_SIDEBAR_WIDTH}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
    left: 0;
    .MuiBottomNavigationAction-label {
      font-size: 10px;
    }
  }
`
