import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import styled from 'styled-components'
import { FooterIcons } from './FooterIcons'

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
