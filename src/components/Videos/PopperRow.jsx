import React from 'react'
import { MenuItem } from '@material-ui/core'
import { StyledListItemIcon } from '../../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'

export const PopperRow = ({ Icon, text, onClick }) => {
  return (
    <MenuItem style={{ padding: '4px 32px 4px 16px' }} onClick={onClick}>
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </MenuItem>
  )
}
