import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import { IconTooltip, StyledIconButton } from '../../../utils/utils'
import { useGlobalContext } from '../../../../context'

function CreateVideoButton() {
  const { setAnchorVideoButton } = useGlobalContext()

  return (
    <IconTooltip title="Create">
      <StyledIconButton
        onClick={(event) => setAnchorVideoButton(event.currentTarget)}
      >
        <VideoCallIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}

export default CreateVideoButton
