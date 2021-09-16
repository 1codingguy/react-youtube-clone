import React, { useState } from 'react'
import AvatarIconButton from './AvatarIconButton'
import AvatarMenu from './AvatarMenu'

const AvatarButton = () => {
  const [anchorAvatarButton, setAnchorAvatarButton] = useState(null)
  const handleAvatarMenuClose = () => {
    setAnchorAvatarButton(null)
  }
  return (
    <>
      <AvatarIconButton {...{ setAnchorAvatarButton }} />
      <AvatarMenu {...{ anchorAvatarButton, handleAvatarMenuClose }} />
    </>
  )
}

export default AvatarButton
