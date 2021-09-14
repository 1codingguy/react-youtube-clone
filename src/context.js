import React, { useContext, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
  MOBILE_VIEW_BREAKPOINT,
  SHOW_FULL_SIDEBAR,
} from './components/utils/utils'
import useResetShowFullWidthSidebarState from './components/utils/useResetShowFullWidthSidebarState'
import useResetOpenSearchDrawer from './components/utils/useResetOpenSearchDrawer'

const YouTubeContext = React.createContext()

// Provider
export const ContextProvider = ({ children }) => {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)
  const shouldOpenSidebarDrawer = !useMediaQuery(
    `(min-width:${SHOW_FULL_SIDEBAR}px)`
  )

  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false)
  const [showFullWidthSidebar, setShowFullWidthSidebar] = useState(true)
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false)
  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)
  const [anchorAvatarButton, setAnchorAvatarButton] = useState(null)

  const handleHamburgerMenuClick = () => {
    // open drawer only under 1313px, mobile view doesn't have a hamburger menu so it's not a concern
    if (shouldOpenSidebarDrawer) {
      setOpenSidebarDrawer(!openSidebarDrawer)
    } //toggle between MiniSidebar and FullWidthSidebar if >= 1313px
    setShowFullWidthSidebar(!showFullWidthSidebar)
  }

  const handleRightContainerMenusClose = () => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
    setAnchorAvatarButton(null)
  }

  // reset showFullWidthSidebar to true if < 1313px
  useResetShowFullWidthSidebarState(setShowFullWidthSidebar)

  // reset openSearchDrawer to false when >= 657px
  useResetOpenSearchDrawer(setOpenSearchDrawer)

  return (
    <YouTubeContext.Provider
      value={{
        isMobileView,
        shouldOpenSidebarDrawer,
        openSidebarDrawer,
        setOpenSidebarDrawer,
        showFullWidthSidebar,
        setShowFullWidthSidebar,
        handleHamburgerMenuClick,
        openSearchDrawer,
        setOpenSearchDrawer,
        anchorVideoButton,
        setAnchorVideoButton,
        anchorAppsButton,
        setAnchorAppsButton,
        anchorNotificationsButton,
        setAnchorNotificationsButton,
        anchorAvatarButton,
        setAnchorAvatarButton,
        handleRightContainerMenusClose,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  )
}

// Consumer
export const useGlobalContext = () => {
  return useContext(YouTubeContext)
}
