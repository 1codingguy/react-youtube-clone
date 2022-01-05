import React from 'react'
import FullWidthSidebar from './FullWidthSidebar'
import MiniSidebar from './MiniSidebar'
import {
  useShouldShowMiniSidebar,
  useMinWidthToShowFullSidebar,
} from '../../utils/utils'
import { userSettingToShowFullSidebarAtom } from '../../store'
import { useAtom } from 'jotai'

// determine to show MiniSidebar or FullWidthSidebar
const SidebarToShow = () => {
  const shouldShowMiniSidebar = useShouldShowMiniSidebar()
  const minWidthToShowFullSidebar = useMinWidthToShowFullSidebar()
  const [userSettingToShowFullSidebar] = useAtom(
    userSettingToShowFullSidebarAtom
  )
  // combine user setting and width criteria
  const shouldShowFullSidebar =
    minWidthToShowFullSidebar && userSettingToShowFullSidebar

  // if not show FullWidthSidebar, then either show MiniSidebar or nothing
  return shouldShowFullSidebar ? (
    <FullWidthSidebar />
  ) : shouldShowMiniSidebar ? (
    <MiniSidebar />
  ) : null
}

export default SidebarToShow
