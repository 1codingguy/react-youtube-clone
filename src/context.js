import React, { useContext, useState } from 'react'
import { useAtom } from 'jotai'
import {
  useIsMobileView,
  useMinWidthToShowFullSidebar,
  useShouldShowMiniSidebar,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  FULL_SIDEBAR_WIDTH,
  MINI_SIDEBAR_WIDTH,
} from './components/utils/utils'
import { userSettingToShowFullSidebarAtom } from './store'

const YouTubeContext = React.createContext()

// Provider
export const ContextProvider = ({ children }) => {
  // determine the offset pixel for Videos component
  // retain in ContextProvider since there are lots of variables involved in calculation, importing all these every time causes lots of repetition

  const isMobileView = useIsMobileView()
  const minWidthToShowFullSidebar = useMinWidthToShowFullSidebar()
  const [userSettingToShowFullSidebar] = useAtom(
    userSettingToShowFullSidebarAtom
  )
  const shouldShowMiniSidebar = useShouldShowMiniSidebar()
  // combine user setting and width criteria
  const shouldShowFullSidebar =
    minWidthToShowFullSidebar && userSettingToShowFullSidebar

  const marginTopToOffset = isMobileView
    ? MOBILE_VIEW_HEADER_HEIGHT
    : DESKTOP_VIEW_HEADER_HEIGHT

  const marginLeftToOffset = shouldShowFullSidebar
    ? `${FULL_SIDEBAR_WIDTH}px`
    : shouldShowMiniSidebar
    ? `${MINI_SIDEBAR_WIDTH}px`
    : '0px'

  return (
    <YouTubeContext.Provider
      value={{
        marginTopToOffset,
        marginLeftToOffset,
        shouldShowFullSidebar,
        shouldShowMiniSidebar,
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
