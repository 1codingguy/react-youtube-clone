import React, { useState } from 'react'
import CreateVideoIconButton from './CreateVideoIconButton'
import CreateVideoMenu from './CreateVideoMenu'

const CreateVideoButton = () => {
  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const handleVideoMenuClose = () => {
    setAnchorVideoButton(null)
  }
  return (
    <>
      <CreateVideoIconButton {...{ setAnchorVideoButton }} />
      <CreateVideoMenu {...{ anchorVideoButton, handleVideoMenuClose }} />
    </>
  )
}

export default CreateVideoButton
