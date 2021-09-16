import React from 'react'
import { useAtom } from 'jotai'
import {
  useMinWidthToShowFullSidebar,
  useShouldShowMiniSidebar,
} from '../utils/utils'
import { userSettingToShowFullSidebarAtom } from '../../store'
import FullWidthSidebar from './FullWidthSidebar'
import MiniSidebar from './MiniSidebar'

// determine to show MiniSidebar or FullWidthSidebar
const SidebarToShow = () => {
  const minWidthToShowFullSidebar = useMinWidthToShowFullSidebar()
  const shouldShowMiniSidebar = useShouldShowMiniSidebar()
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
