import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import FullWidthSidebar from '../../Sidebar/FullWidthSidebar'
import YouTubeLogo from './YouTubeLogo'
import { DESKTOP_VIEW_HEADER_HEIGHT } from '../../utils/utils'
import HamburgerMenuIcon from './HamburgerMenuIcon'
import { useGlobalContext } from '../../../context'

const SidebarDrawer = () => {
  const { openSidebarDrawer, setOpenSidebarDrawer } = useGlobalContext()

  return (
    <Drawer
      anchor="left"
      open={openSidebarDrawer}
      onClose={() => setOpenSidebarDrawer(false)}
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
