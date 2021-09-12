import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import FullWidthSidebar from '../Sidebar/FullWidthSidebar'
import Tooltip from '@material-ui/core/Tooltip'
import { useMediaQuery } from '@material-ui/core'

import {
  StyledIconButton,
  MOBILE_VIEW_BREAKPOINT,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../utils/utils'

const LeftContainer = ({
  openSidebarDrawer,
  setOpenSidebarDrawer,
  handleHamburgerMenuClick,
}) => {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)

  return (
    <StyledLeftContainer>
      {/* mobile view hides the hamburgerMenu */}
      {isMobileView ? null : (
        <HamburgerMenuIcon onClick={handleHamburgerMenuClick} />
      )}
      <Logo />

      <Drawer
        anchor="left"
        open={openSidebarDrawer}
        onClose={() => setOpenSidebarDrawer(false)}
        transitionDuration={0}
      >
        <DrawerHamburgerMenuContainer>
          <HamburgerMenuIcon onClick={handleHamburgerMenuClick} />
          <Logo />
        </DrawerHamburgerMenuContainer>

        <FullWidthSidebar setOpenSidebarDrawer={setOpenSidebarDrawer} />
      </Drawer>
    </StyledLeftContainer>
  )
}
export default LeftContainer

const StyledLeftContainer = styled.div`
  color: #030303;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-wrap: nowrap;
`

const HamburgerMenuIcon = ({ onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <MenuIcon />
    </StyledIconButton>
  )
}

const Logo = () => {
  return (
    <YouTubeLogoTooltip title="YouTube Home">
      <YouTubeLogoContainer>
        <YouTubeLogo
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="logo"
        />
      </YouTubeLogoContainer>
    </YouTubeLogoTooltip>
  )
}

const DrawerHamburgerMenuContainer = styled.div`
  display: flex;
  min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  padding-left: 16px;
  align-items: center;
`

const YouTubeLogoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  /* it has to be popper in classes, then specify .MuiToolTip-tooltip, not sure why  */
  .MuiTooltip-tooltip {
    background-color: white;
    color: gray;
    border: 1px solid gray;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
  }
`

const YouTubeLogoContainer = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
`

const YouTubeLogo = styled.img`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    margin: auto 1rem;
  }
  height: 20px;
  cursor: pointer;
  margin: auto 16px;
`
