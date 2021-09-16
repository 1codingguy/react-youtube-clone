import React, { useState } from 'react'
import NotificationsIconButton from './NotificationsIconButton'
import NotificationsMenu from './NotificationsMenu'

const NotificationsButton = () => {
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)
  const handleNotificationsMenuClose = () => {
    setAnchorNotificationsButton(null)
  }
  return (
    <>
      <NotificationsIconButton {...{ setAnchorNotificationsButton }} />
      <NotificationsMenu
        {...{ anchorNotificationsButton, handleNotificationsMenuClose }}
      />
    </>
  )
}

export default NotificationsButton
