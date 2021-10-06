import { atom } from 'jotai'

export const isSidebarDrawerOpenAtom = atom(false)

// default userSetting to show FullWidthSidebar
export const userSettingToShowFullSidebarAtom = atom(true)

export const searchTermAtom = atom('')
export const searchTermNextPageTokenAtom = atom(null)
export const searchTermTotalResultsAtom = atom(null)
export const searchResultsAtom = atom(null)

