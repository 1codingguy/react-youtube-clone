import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import { useMediaQuery } from '@material-ui/core'

import {
  MOBILE_VIEW_BREAKPOINT,
  SHOW_FULL_SIDEBAR,
} from './components/utils/utils'
import Footer from './components/Sidebar/Footer'
import Main from './components/Main/Main.jsx'

function App() {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT})`)

  const shouldOpenDrawer = !useMediaQuery(`(min-width:${SHOW_FULL_SIDEBAR})`)

  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false)

  const [showFullWidthSidebar, setShowFullWidthSidebar] = useState(true)

  const handleHamburgerMenuClick = () => {
    // open drawer only under 1313px, mobile view doesn't have a hamburger menu so not a concern
    if (shouldOpenDrawer) {
      setOpenSidebarDrawer(!openSidebarDrawer)
    } //toggle between MiniSidebar and FullWidthSidebar if >= 1313px
    setShowFullWidthSidebar(!showFullWidthSidebar)
  }

  useEffect(() => {
    const resizeListener = () => {
      // if window resized under 1313px, set to true
      if (window.innerWidth < 1313) {
        setShowFullWidthSidebar(true)
      }
    }

    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })

  return (
    <div className="App">
      <Header
        isMobileView={isMobileView}
        openSidebarDrawer={openSidebarDrawer}
        setOpenSidebarDrawer={setOpenSidebarDrawer}
        handleHamburgerMenuClick={handleHamburgerMenuClick}
      />

      <Main
        showFullWidthSidebar={showFullWidthSidebar}
        setOpenSidebarDrawer={setOpenSidebarDrawer}
      />
      {isMobileView && <Footer />}
    </div>
  )
}

export default App
