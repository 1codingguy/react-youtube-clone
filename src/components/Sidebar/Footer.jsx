import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import styled from 'styled-components'

import { miniSidebarRows as footerColumns } from './sidebarData'

const MobileFooter = () => {
  return (
    <FooterContainer showLabels>
      <FooterIcons />
    </FooterContainer>
  )
}

export default MobileFooter

const FooterContainer = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
  }
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`

export const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-wrapper {
    color: #030303;
  }
  .MuiBottomNavigationAction-label {
    font-size: 10px;
    opacity: 1 !important; // to override MiniSidebar opacity=0
    margin-top: 6px;
  }
`

export const FooterIcons = () => {
  return footerColumns.map(({ Icon, text }) => {
    return (
      <StyledBottomNavigationAction key={text} label={text} icon={<Icon />} />
    )
  })
}
