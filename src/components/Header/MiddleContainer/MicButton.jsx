import React from 'react'
import MicIcon from '@material-ui/icons/Mic'
import { IconTooltip, StyledIconButton } from '../../../utils/utils'

export const MicButton = () => {
  return (
    <IconTooltip title="Search with your voice">
      <StyledIconButton>
        <MicIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}
