import { sideBarShowLess } from './sidebarData'
import { SidebarRow } from './SidebarRow'

export const ShowLessRow = ({ onClick }) => {
  const { Icon, text } = sideBarShowLess[0]
  return <SidebarRow {...{ Icon, text, onClick }} />
}
