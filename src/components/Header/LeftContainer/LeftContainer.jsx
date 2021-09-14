import React from 'react'
import styled from 'styled-components'
import YouTubeLogo from './YouTubeLogo'
import SidebarDrawer from './SidebarDrawer'
import HamburgerMenuIcon from './HamburgerMenuIcon'

import { useGlobalContext } from '../../../context'

const LeftContainer = () => {
  const { isMobileView } = useGlobalContext()

  return (
    <StyledLeftContainer>
      {/* mobile view hides the hamburgerMenu */}
      {isMobileView ? null : <HamburgerMenuIcon />}
      <YouTubeLogo />

      <SidebarDrawer />
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
