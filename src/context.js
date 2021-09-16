import React, { useContext, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_BREAKPOINT,
  SHOW_FULL_SIDEBAR,
  SHOW_MINI_SIDEBAR,
  MINI_SIDEBAR_WIDTH,
  FULL_SIDEBAR_WIDTH,
} from './components/utils/utils'
import useResetUserSettingToShowFullSidebar from './components/utils/useResetUserSettingToShowFullSidebar'
import useResetOpenSearchDrawer from './components/utils/useResetOpenSearchDrawer'
import MiniSidebar from './components/Sidebar/MiniSidebar'
import FullWidthSidebar from './components/Sidebar/FullWidthSidebar'

const YouTubeContext = React.createContext()

// Provider
export const ContextProvider = ({ children }) => {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)
  const shouldOpenSidebarDrawer = !useMediaQuery(
    `(min-width:${SHOW_FULL_SIDEBAR}px)`
  )

  // --------------------------------------------------------------
  // determine to show MiniSidebar or FullWidthSidebar
  // show the mini sidebar above the min-width,
  const shouldShowMiniSidebar = useMediaQuery(
    `(min-width: ${SHOW_MINI_SIDEBAR}px)`
  )
  // a. default userSetting to show FullWidthSidebar
  const [userSettingToShowFullSidebar, setUserSettingToShowFullSidebar] =
    useState(true)
  // b. width criteria to show full width sidebar
  const minWidthToShowFullSidebar = useMediaQuery(
    `(min-width: ${SHOW_FULL_SIDEBAR}px)`
  )
  // combine a. user setting and b. width criteria
  const shouldShowFullSidebar =
    minWidthToShowFullSidebar && userSettingToShowFullSidebar

  // if not show FullWidthSidebar, then either show MiniSidebar or nothing
  const SidebarToShow = () => {
    return shouldShowFullSidebar ? (
      <FullWidthSidebar />
    ) : shouldShowMiniSidebar ? (
      <MiniSidebar />
    ) : null
  }
  // --------------------------------------------------------------
  // determine the offset pixel for Videos component

  const marginTopToOffset = isMobileView
    ? MOBILE_VIEW_HEADER_HEIGHT
    : DESKTOP_VIEW_HEADER_HEIGHT

  const marginLeftToOffset = shouldShowFullSidebar
    ? `${FULL_SIDEBAR_WIDTH}px`
    : shouldShowMiniSidebar
    ? `${MINI_SIDEBAR_WIDTH}px`
    : '0px'

  // --------------------------------------------------------------
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false)
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
    setUserSettingToShowFullSidebar(!userSettingToShowFullSidebar)
  }

  const handleRightContainerMenusClose = () => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
    setAnchorAvatarButton(null)
  }

  // reset showFullWidthSidebar to true if < 1313px
  useResetUserSettingToShowFullSidebar(
    setUserSettingToShowFullSidebar,
    setOpenSidebarDrawer
  )

  // reset openSearchDrawer to false when >= 657px
  useResetOpenSearchDrawer(setOpenSearchDrawer)

  return (
    <YouTubeContext.Provider
      value={{
        isMobileView,
        shouldOpenSidebarDrawer,
        openSidebarDrawer,
        setOpenSidebarDrawer,
        userSettingToShowFullSidebar,
        setUserSettingToShowFullSidebar,
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
        SidebarToShow,
        marginTopToOffset,
        marginLeftToOffset,
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
