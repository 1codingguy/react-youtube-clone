import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import Drawer from '@material-ui/core/Drawer'
import FullWidthSidebar from './FullWidthSidebar'
import YouTubeLogo from '../Header/LeftContainer/YouTubeLogo'
import {
  DESKTOP_VIEW_HEADER_HEIGHT,
  SHOW_FULL_SIDEBAR_BREAKPOINT,
} from '../../utils/utils'
import HamburgerMenuIcon from '../Header/LeftContainer/HamburgerMenuIcon'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

const SidebarDrawer = () => {
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useAtom(
    isSidebarDrawerOpenAtom
  )

  // close sidebar drawer if currently opened and resized to >= 1313px
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth >= SHOW_FULL_SIDEBAR_BREAKPOINT) {
        setIsSidebarDrawerOpen(false)
      }
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })
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
      {/* drawer prop to change height calculation */}
      <FullWidthSidebar isDrawer={isSidebarDrawerOpen} />
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
