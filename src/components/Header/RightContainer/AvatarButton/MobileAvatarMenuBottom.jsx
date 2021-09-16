import { mobileMenuArray } from './mobileAvatarMenuData'
import { MobileMenuRow } from './MobileMenuRow'

export const MobileAvatarMenuBottom = ({ onClick }) => {
  return mobileMenuArray.slice(4).map(({ Icon, text }) => {
    return <MobileMenuRow key={text} {...{ Icon, text, onClick }} />
  })
}
