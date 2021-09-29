import {atom} from 'jotai'

export const isSidebarDrawerOpenAtom = atom(false)

// default userSetting to show FullWidthSidebar
export const userSettingToShowFullSidebarAtom = atom(true)

export const selectedChipIndexAtom = atom(0)

export const landingPageVideosAtom = atom([])

export const nextPageTokenAtom = atom(null)
// total number of videos returned by API query
export const totalResultsAtom = atom(0)