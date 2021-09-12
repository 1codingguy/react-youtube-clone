import React from 'react'
import { IconTooltip, StyledIconButton } from '../utils/utils'

const FocusableIcon = ({ tooltipTitle, Icon, onClick = null }) => {
  return (
    <IconTooltip title={tooltipTitle}>
      <StyledIconButton onClick={onClick}>
        <Icon />
      </StyledIconButton>
    </IconTooltip>
  )
}

export default FocusableIcon
