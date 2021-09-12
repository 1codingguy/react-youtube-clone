import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core'

import { MOBILE_VIEW_BREAKPOINT } from '../../utils/utils'
import YouTubeLogo from './YouTubeLogo'
import SidebarDrawer from './SidebarDrawer'
import HamburgerMenuIcon from './HamburgerMenuIcon'

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
      <YouTubeLogo />

      <SidebarDrawer
        openSidebarDrawer={openSidebarDrawer}
        setOpenSidebarDrawer={setOpenSidebarDrawer}
        handleHamburgerMenuClick={handleHamburgerMenuClick}
      />
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
