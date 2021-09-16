import { mobileMenuArray } from './mobileAvatarMenuData'
import { MobileMenuRow } from './MobileMenuRow'

export const MobileAvatarMenuTop = ({ onClick }) => {
  return mobileMenuArray.slice(0, 4).map(({ Icon, text }) => {
    return <MobileMenuRow key={text} {...{ Icon, text, onClick }} />
  })
}
