import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { IconTooltip, StyledIconButton } from '../../../utils/utils'

export const SearchButton = ({ setIsSearchDrawerOpen }) => {
  return (
    <IconTooltip title="Search">
      <StyledIconButton onClick={() => setIsSearchDrawerOpen(true)}>
        <SearchIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}