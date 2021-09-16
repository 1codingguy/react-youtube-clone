import { menuArray } from './avatarMenuData'
import { MenuRow } from './MenuRow'

export const AvatarMenuMiddle = ({ onClick }) => {
  return menuArray.slice(5).map(({ Icon, text, arrow }) => {
    return <MenuRow key={text} {...{ Icon, text, arrow, onClick }} />
  })
}
