import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledMenuItem, StyledListItemIcon } from '../../../../utils/utils';
export const AppsMenuRow = ({ Icon, text, onClick }) => {

  return (
    <StyledMenuItem onClick={onClick}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  )
}
