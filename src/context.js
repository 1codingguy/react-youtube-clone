import React, { useContext, useState } from 'react'

const YouTubeContext = React.createContext()

// Provider
export const ContextProvider = ({ children }) => {

  // --------------------------------------------------------------
  // determine the offset pixel for Videos component

  // const marginTopToOffset = isMobileView
  //   ? MOBILE_VIEW_HEADER_HEIGHT
  //   : DESKTOP_VIEW_HEADER_HEIGHT

  // const marginLeftToOffset = shouldShowFullSidebar
  //   ? `${FULL_SIDEBAR_WIDTH}px`
  //   : shouldShowMiniSidebar
  //   ? `${MINI_SIDEBAR_WIDTH}px`
  //   : '0px'

  // --------------------------------------------------------------

  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)
  const [anchorAvatarButton, setAnchorAvatarButton] = useState(null)

  const handleRightContainerMenusClose = () => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
    setAnchorAvatarButton(null)
  }

  return (
    <YouTubeContext.Provider
      value={{
        anchorVideoButton,
        setAnchorVideoButton,
        anchorAppsButton,
        setAnchorAppsButton,
        anchorNotificationsButton,
        setAnchorNotificationsButton,
        anchorAvatarButton,
        setAnchorAvatarButton,
        handleRightContainerMenusClose,
        // marginTopToOffset,
        // marginLeftToOffset,
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
