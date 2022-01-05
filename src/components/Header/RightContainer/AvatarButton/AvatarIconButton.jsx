import React from 'react'
import styled from 'styled-components/macro'
import Avatar from '@material-ui/core/Avatar'
import { StyledIconButton, TWO_COL_MIN_WIDTH } from '../../../../utils/utils'

function AvatarIconButton({ setAnchorAvatarButton }) {
  return (
    <StyledIconButton
      onClick={(event) => setAnchorAvatarButton(event.currentTarget)}
    >
      <StyledAvatar>C</StyledAvatar>
    </StyledIconButton>
  )
}

export default AvatarIconButton

const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    font-size: 0.875rem;
    background-color: #ef6c00;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 32px;
      height: 32px;
    }
  }
`
