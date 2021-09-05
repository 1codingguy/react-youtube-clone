import React from 'react'
import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation'

import { footerIcons } from './Footer'

const MiniSidebar = () => {
  return (
    <StyledMiniSidebar>{footerIcons({ padding: '16px 0' })}</StyledMiniSidebar>
  )
}

export default MiniSidebar

const StyledMiniSidebar = styled(BottomNavigation)`
  width: 72px;
  height: auto !important; // to override default height:56px which also mess up flex-box
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
