import React from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { StyledMenuItem } from '../../../../utils/utils'

export const AvatarMenuBottom = ({ onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <ListItemText>Restricted Mode: Off</ListItemText>
      <ChevronRightIcon style={{ fontSize: '20px' }} />
    </StyledMenuItem>
  )
}
