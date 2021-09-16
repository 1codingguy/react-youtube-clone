import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { IconTooltip, StyledIconButton } from '../../utils/utils'
import { useGlobalContext } from '../../../context'

export const SearchButton = () => {
  const { setIsSearchDrawerOpen } = useGlobalContext()
  return (
    <IconTooltip title="Search">
      <StyledIconButton onClick={() => setIsSearchDrawerOpen(true)}>
        <SearchIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}
