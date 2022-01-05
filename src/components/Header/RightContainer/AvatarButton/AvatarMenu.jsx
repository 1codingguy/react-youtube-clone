import React from 'react'
import MobileAvatarPopUpMenu from './MobileAvatarPopUpMenu'
import { AvatarPopUpMenu } from './AvatarPopUpMenu'
import { useIsMobileView } from '../../../../utils/utils'

const AvatarMenu = ({ anchorAvatarButton, handleAvatarMenuClose }) => {
  const isMobileView = useIsMobileView()

  if (isMobileView) {
    return (
      <MobileAvatarPopUpMenu
        {...{ anchorAvatarButton, handleAvatarMenuClose }}
      />
    )
  }
  return <AvatarPopUpMenu {...{ anchorAvatarButton, handleAvatarMenuClose }} />
}

export default AvatarMenu
