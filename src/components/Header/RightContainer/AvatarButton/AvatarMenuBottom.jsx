import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { StyledMenuItem } from '../../../utils/utils';
import { useGlobalContext } from '../../../../context';

export const AvatarMenuBottom = () => {
  const { handleRightContainerMenusClose } = useGlobalContext();

  return (
    <StyledMenuItem onClick={handleRightContainerMenusClose}>
      <ListItemText>Restricted Mode: Off</ListItemText>
      <ChevronRightIcon style={{ fontSize: '20px' }} />
    </StyledMenuItem>
  );
};
