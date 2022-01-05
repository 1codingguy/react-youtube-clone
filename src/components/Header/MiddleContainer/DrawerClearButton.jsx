import React from 'react'
import { StyledIconButton } from '../../../utils/utils'
import ClearIcon from '@material-ui/icons/Clear'

export const DrawerClearButton = ({ setSearchTerm }) => {
  return (
    <StyledIconButton
      style={{ padding: '8px' }}
      onClick={() => setSearchTerm('')}
    >
      <ClearIcon />
    </StyledIconButton>
  )
}
