import React, { useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { useAtom } from 'jotai'
import {
  StyledIconButton,
  useShouldOpenSidebarDrawer,
  SHOW_FULL_SIDEBAR_BREAKPOINT,
} from '../../../utils/utils'
import {
  isSidebarDrawerOpenAtom,
  userSettingToShowFullSidebarAtom,
} from '../../../store'

const HamburgerMenuIcon = () => {
  const shouldOpenSidebarDrawer = useShouldOpenSidebarDrawer()
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useAtom(
    isSidebarDrawerOpenAtom
  )
  const [userSettingToShowFullSidebar, setUserSettingToShowFullSidebar] =
    useAtom(userSettingToShowFullSidebarAtom)

  const handleHamburgerMenuClick = () => {
    // open drawer only under 1313px, mobile view doesn't have a hamburger menu so it's not a concern
    if (shouldOpenSidebarDrawer) {
      setIsSidebarDrawerOpen(!isSidebarDrawerOpen)
    } else {
      //toggle between MiniSidebar and FullWidthSidebar if >= 1313px
      setUserSettingToShowFullSidebar(!userSettingToShowFullSidebar)
    }
  }

  // Reset userSettingToShowFullSidebar to default if resized under 1313px
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth < SHOW_FULL_SIDEBAR_BREAKPOINT) {
        setUserSettingToShowFullSidebar(true)
      }
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })

  return (
    <StyledIconButton onClick={handleHamburgerMenuClick}>
      <MenuIcon />
    </StyledIconButton>
  )
}

export default HamburgerMenuIcon
