import React from 'react'
import MobileAvatarPopUpMenu from './MobileAvatarPopUpMenu'
import { useGlobalContext } from '../../../../context'
import { AvatarPopUpMenu } from './AvatarPopUpMenu'

const AvatarMenu = () => {
  const { isMobileView } = useGlobalContext()

  if (isMobileView) {
    return <MobileAvatarPopUpMenu />
  }
  return <AvatarPopUpMenu />
}

export default AvatarMenu