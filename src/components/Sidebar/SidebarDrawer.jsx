import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import FullWidthSidebar from './FullWidthSidebar'
import YouTubeLogo from '../Header/LeftContainer/YouTubeLogo'
import { DESKTOP_VIEW_HEADER_HEIGHT } from '../utils/utils'
import HamburgerMenuIcon from '../Header/LeftContainer/HamburgerMenuIcon'
import { useGlobalContext } from '../../context'

const SidebarDrawer = () => {
  const { isSidebarDrawerOpen, setIsSidebarDrawerOpen } = useGlobalContext()

  return (
    <Drawer
      anchor="left"
      open={isSidebarDrawerOpen}
      onClose={() => setIsSidebarDrawerOpen(false)}
      transitionDuration={0}
    >
      <DrawerHeader>
        <HamburgerMenuIcon />
        <YouTubeLogo />
      </DrawerHeader>
      <FullWidthSidebar />
    </Drawer>
  )
}

export default SidebarDrawer

const DrawerHeader = styled.div`
  display: flex;
  min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  padding-left: 16px;
  align-items: center;
`
