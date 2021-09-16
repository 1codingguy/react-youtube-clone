import { useEffect } from 'react'
import { SHOW_FULL_SIDEBAR } from './utils'

export default function useResetUserSettingToShowFullSidebar(
  setUserSettingToShowFullSidebar,
  setIsSidebarDrawerOpen
) {
  useEffect(() => {
    const resizeListener = () => {
      // if window resized under 1313px, reset to default
      if (window.innerWidth < SHOW_FULL_SIDEBAR) {
        setUserSettingToShowFullSidebar(true)
      }
      // close sidebar drawer if >= 1313px
      if (window.innerWidth >= SHOW_FULL_SIDEBAR) {
        setIsSidebarDrawerOpen(false)
      }
    }

    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })
}
