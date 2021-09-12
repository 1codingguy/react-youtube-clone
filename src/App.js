import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import { useMediaQuery } from '@material-ui/core'
import TestHeader from './TestHeader'

import {
  MOBILE_VIEW_BREAKPOINT,
  SHOW_FULL_SIDEBAR,
} from './components/utils/utils'
import Footer from './components/Sidebar/Footer'
import Main from './components/Main/Main.jsx'
import { useResetShowFullWidthSidebarState } from './components/utils/useResetShowFullWidthSidebarState'

function App() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)

  const shouldOpenDrawer = !useMediaQuery(`(min-width:${SHOW_FULL_SIDEBAR}px)`)

  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false)

  const [showFullWidthSidebar, setShowFullWidthSidebar] = useState(true)

  const handleHamburgerMenuClick = () => {
    // open drawer only under 1313px, mobile view doesn't have a hamburger menu so not a concern
    if (shouldOpenDrawer) {
      setOpenSidebarDrawer(!openSidebarDrawer)
    } //toggle between MiniSidebar and FullWidthSidebar if >= 1313px
    setShowFullWidthSidebar(!showFullWidthSidebar)
  }

  useResetShowFullWidthSidebarState(setShowFullWidthSidebar)

  return (
    <div className="App">
      {/* <TestHeader /> */}

      <Header
        openSidebarDrawer={openSidebarDrawer}
        setOpenSidebarDrawer={setOpenSidebarDrawer}
        handleHamburgerMenuClick={handleHamburgerMenuClick}
      />

      <Main
        showFullWidthSidebar={showFullWidthSidebar}
        px
        setOpenSidebarDrawer={setOpenSidebarDrawer}
      />
      {isMobileView && <Footer />}
    </div>
  )
}

export default App
