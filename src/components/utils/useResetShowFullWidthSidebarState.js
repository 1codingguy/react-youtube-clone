import { useEffect } from 'react'
import { SHOW_FULL_SIDEBAR } from './utils'

export function useResetShowFullWidthSidebarState(setShowFullWidthSidebar) {
  useEffect(() => {
    const resizeListener = () => {
      // if window resized under 1313px, set to true
      if (window.innerWidth < SHOW_FULL_SIDEBAR) {
        setShowFullWidthSidebar(true)
      }
    }

    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })
}
