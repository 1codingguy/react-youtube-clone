import React from 'react'
import FullWidthSidebar from './FullWidthSidebar'
import MiniSidebar from './MiniSidebar'
import { useGlobalContext } from '../../context'

// determine to show MiniSidebar or FullWidthSidebar
const SidebarToShow = () => {
  const { shouldShowFullSidebar, shouldShowMiniSidebar } = useGlobalContext()

  // if not show FullWidthSidebar, then either show MiniSidebar or nothing
  return shouldShowFullSidebar ? (
    <FullWidthSidebar />
  ) : shouldShowMiniSidebar ? (
    <MiniSidebar />
  ) : null
}

export default SidebarToShow
