import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import styled from 'styled-components'
import { FooterIcons } from './FooterIcons'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { MOBILE_VIEW_SCROLL_THRESHOLD } from '../utils/utils'

const MobileFooter = () => {
  return (
    <HideFooterOnScroll>
      <FooterContainer showLabels>
        <FooterIcons />
      </FooterContainer>
    </HideFooterOnScroll>
  )
}

export default MobileFooter

const FooterContainer = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    overflow-x: hidden;
  }
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding-top: 8px;
  }
`
export function HideFooterOnScroll({ children }) {
  const shouldShowFooter = !useScrollTrigger({
    threshold: 100,
  })

  return (
    <Slide in={shouldShowFooter} direction="up">
      {children}
    </Slide>
  )
}
