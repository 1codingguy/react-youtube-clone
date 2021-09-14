import React from 'react'
import styled from 'styled-components'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import Fab from '@material-ui/core/Fab'
import { useGlobalContext } from '../../../../context'

export const MobileUpButton = () => {
  const { handleRightContainerMenusClose } = useGlobalContext()
  return (
    <StyledFab onClick={handleRightContainerMenusClose}>
      <ArrowUpwardOutlinedIcon style={{ fontSize: '20px' }} />
    </StyledFab>
  )
}

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    top: 142px;
    right: 20px;
    background-color: #ff0000;
    color: white;
  }
`
