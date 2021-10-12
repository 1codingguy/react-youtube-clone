import React from 'react'
import styled from 'styled-components/macro'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

export const MobileAvatarMenuHeader = ({ onClick }) => {
  return (
    <MobileHeaderContainer square={true}>
      <CloseMobileMenuButton onClick={onClick} />
      <Typography>Account</Typography>
    </MobileHeaderContainer>
  )
}

const CloseMobileMenuButton = styled(CloseOutlinedIcon)`
  cursor: pointer;
  margin: 8px;
  margin-right: 32px;
`
const MobileHeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  min-height: 52px;
`
