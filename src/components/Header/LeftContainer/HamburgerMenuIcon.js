import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledIconButton } from '../../utils/utils'

const HamburgerMenuIcon = ({ onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <MenuIcon />
    </StyledIconButton>
  )
}

export default HamburgerMenuIcon
