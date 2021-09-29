import { sideBarShowMore } from './sidebarData'
import { SidebarRow } from './SidebarRow'

export const ShowMoreRow = ({ onClick }) => {
  const { Icon, text } = sideBarShowMore[0]
  return <SidebarRow {...{ Icon, text, onClick }} />
}
