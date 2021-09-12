import { useEffect } from 'react'
import { SHOW_SEARCH_BOX_BREAKPOINT } from './utils'

export default function useResetOpenSearchDrawer(setOpenSearchDrawer) {
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth >= SHOW_SEARCH_BOX_BREAKPOINT) {
        setOpenSearchDrawer(false)
      }
    }

    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })
}
