import { sideBarMenuRows } from './sidebarData'
import { SidebarRow } from './SidebarRow'

export const SidebarTopMenuSection1 = () => {
  return sideBarMenuRows.slice(0, 3).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />
  })
}
