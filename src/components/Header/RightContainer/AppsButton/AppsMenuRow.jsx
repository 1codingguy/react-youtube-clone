import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { useGlobalContext } from '../../../../context';
import { StyledMenuItem, StyledListItemIcon } from '../../../utils/utils';
export const AppsMenuRow = ({ Icon, text }) => {
  const { handleRightContainerMenusClose } = useGlobalContext();

  return (
    <StyledMenuItem onClick={handleRightContainerMenusClose}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  );
};
