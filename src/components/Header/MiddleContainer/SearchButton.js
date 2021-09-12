import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  IconTooltip,
  StyledIconButton
} from '../../utils/utils';

export const SearchButton = ({ setOpenSearchDrawer }) => {
  return (
    <IconTooltip title="Search">
      <StyledIconButton onClick={() => setOpenSearchDrawer(true)}>
        <SearchIcon />
      </StyledIconButton>
    </IconTooltip>
  );
};
