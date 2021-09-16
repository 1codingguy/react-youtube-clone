import React from 'react'
import MobileAvatarPopUpMenu from './MobileAvatarPopUpMenu'
import { AvatarPopUpMenu } from './AvatarPopUpMenu'
import { useIsMobileView } from '../../../utils/utils'

const AvatarMenu = () => {
  const isMobileView = useIsMobileView()

  if (isMobileView) {
    return <MobileAvatarPopUpMenu />
  }
  return <AvatarPopUpMenu />
}

export default AvatarMenu
