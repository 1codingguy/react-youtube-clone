import React from 'react'
import { StyledIconButton } from '../../../utils/utils'
import { MobileSearchIcon } from './MobileViewSearchDrawer'

export const DrawerSearchButton = () => {
  return (
    <StyledIconButton type="submit" style={{ padding: '8px' }}>
      <MobileSearchIcon />
    </StyledIconButton>
  )
}
