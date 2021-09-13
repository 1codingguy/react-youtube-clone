import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import { useMediaQuery } from '@material-ui/core'

import {
  MOBILE_VIEW_BREAKPOINT,
  SHOW_FULL_SIDEBAR,
} from './components/utils/utils'
import Footer from './components/Sidebar/Footer'
import Main from './components/Main/Main.jsx'
import { useResetShowFullWidthSidebarState } from './components/utils/useResetShowFullWidthSidebarState'

function App() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)

  const shouldOpenSidebarDrawer = !useMediaQuery(
    `(min-width:${SHOW_FULL_SIDEBAR}px)`
  )

  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false)

  const [showFullWidthSidebar, setShowFullWidthSidebar] = useState(true)

  const handleHamburgerMenuClick = () => {
    // open drawer only under 1313px, mobile view doesn't have a hamburger menu so it's not a concern
    if (shouldOpenSidebarDrawer) {
      setOpenSidebarDrawer(!openSidebarDrawer)
    } //toggle between MiniSidebar and FullWidthSidebar if >= 1313px
    setShowFullWidthSidebar(!showFullWidthSidebar)
  }

  // reset showFullWidthSidebar to true if < 1313px
  useResetShowFullWidthSidebarState(setShowFullWidthSidebar)

  return (
    <div className="App">

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
