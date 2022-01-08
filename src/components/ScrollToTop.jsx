import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAtom } from 'jotai'
import { searchTermAtom } from '../store'

export default function ScrollToTop({ selectedChipIndex }) {
  const { pathname } = useLocation()
  const [searchTerm] = useAtom(searchTermAtom)

  // scroll to top if pathname, searchTerm, and country chip has changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, searchTerm, selectedChipIndex])

  return null
}
