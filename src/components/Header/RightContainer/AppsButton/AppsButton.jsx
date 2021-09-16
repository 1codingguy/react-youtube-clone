import React, { useState } from 'react'
import AppsMenu from './AppsMenu'
import AppsIconButton from './AppsIconButton'

const AppsButton = () => {
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const handleAppsMenuClose = () => {
    setAnchorAppsButton(null)
  }
  return (
    <>
      <AppsIconButton {...{ setAnchorAppsButton }} />
      <AppsMenu {...{ anchorAppsButton, handleAppsMenuClose }} />
    </>
  )
}

export default AppsButton
