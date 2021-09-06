import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import FullWidthSidebar from '../Sidebar/FullWidthSidebar'

import {
  YouTubeLogoTooltip,
  YouTubeLogoContainer,
  YouTubeLogo,
  StyledBox,
} from '../utils/utils'

function LeftContainer({
  isMobileView,
  openSidebarDrawer,
  setOpenSidebarDrawer,
  handleHamburgerMenuClick,
}) {
  return (
    <StyledLeftContainer padding={0}>
      {isMobileView || <HamburgerMenu onClick={handleHamburgerMenuClick} />}
      <Logo />

      <Drawer
        anchor="left"
        open={openSidebarDrawer}
        onClose={() => setOpenSidebarDrawer(false)}
      >
        <HamburgerMenuContainer>
          <HamburgerMenu onClick={handleHamburgerMenuClick} />
          <Logo style={{ height: '40px' }} />
        </HamburgerMenuContainer>

        <FullWidthSidebar setOpenSidebarDrawer={setOpenSidebarDrawer} />
      </Drawer>
    </StyledLeftContainer>
  )
}
export default LeftContainer

const StyledLeftContainer = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
`

function HamburgerMenu({ onClick }) {
  return (
    <IconButton onClick={onClick}>
      <MenuIcon />
    </IconButton>
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

const HamburgerMenuContainer = styled.div`
  display: flex;
  min-height: 56px;
  padding-left: 16px;
  align-items: center;

  .MuiIconButton-root {
    padding: 8px;
    height: 40px;
  }
`
