import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { StyledIconButton } from '../../utils/utils'
import { useGlobalContext } from '../../../context'

const HamburgerMenuIcon = () => {
  const { handleHamburgerMenuClick } = useGlobalContext()
  return (
    <StyledIconButton onClick={handleHamburgerMenuClick}>
      <MenuIcon />
    </StyledIconButton>
  )
}

export default HamburgerMenuIcon
