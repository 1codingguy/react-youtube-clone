import React from 'react'
import styled from 'styled-components/macro'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {
  DEFAULT_FONT_SIZE,
  TWO_COL_MIN_WIDTH,
  useIsMobileView,
} from '../../../../utils/utils'

export const AvatarAccountInfo = ({ onClick }) => {
  const isMobileView = useIsMobileView()

  return (
    <AccountInfoHeader style={isMobileView ? { padding: '8px' } : null}>
      <Avatar>c</Avatar>
      <Box>
        <AccountName>coding-guy</AccountName>
        <AccountEmail>1codingguy@gmail.com</AccountEmail>
        <ManageAccountButton onClick={onClick}>
          Manage your Google Account
        </ManageAccountButton>
      </Box>
    </AccountInfoHeader>
  )
}
const AccountName = styled(Typography)`
  &&& {
    font-size: 16px;
    font-weight: 600;
  }
`
const AccountEmail = styled(Typography)`
  && {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`
const ManageAccountButton = styled(Typography)`
  && {
    font-size: ${DEFAULT_FONT_SIZE}px;
    margin-top: 8px;
    color: #2c77db;
    cursor: pointer;
  }
`

const AccountInfoHeader = styled.div`
  padding: 0;
  margin: 12px auto;
  display: flex;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding: 16px;
  }

  .MuiAvatar-root {
    background-color: #ef6c00;
    margin-right: 16px;
    width: 48px;
    height: 48px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 40px;
      height: 40px;
    }
  }
`
