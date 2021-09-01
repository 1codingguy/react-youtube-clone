import React from 'react'
import { IconTooltip } from '../sharedComponents/sharedComponents'
import IconButton from '@material-ui/core/IconButton'

const FocusableIcon = ({ tooltipTitle, Icon, onClick = null }) => {
  return (
    <IconTooltip title={tooltipTitle}>
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </IconTooltip>
  )
}

export default FocusableIcon
