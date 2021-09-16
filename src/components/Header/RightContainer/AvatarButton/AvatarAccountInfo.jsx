import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {
  DEFAULT_FONT_SIZE,
  MOBILE_VIEW_BREAKPOINT,
  useIsMobileView,
} from '../../../utils/utils'
import { useGlobalContext } from '../../../../context'

export const AvatarAccountInfo = () => {
  const isMobileView = useIsMobileView()
  const { handleRightContainerMenusClose } = useGlobalContext()

  return (
    <AccountInfoHeader style={isMobileView ? { padding: '8px' } : null}>
      <Avatar>c</Avatar>
      <Box>
        <AccountName>coding-guy</AccountName>
        <AccountEmail>1codingguy@gmail.com</AccountEmail>
        <ManageAccountButton onClick={handleRightContainerMenusClose}>
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
  display: flex;
  padding: 16px;

  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    padding: 0;
    margin: 12px auto;
  }

  .MuiAvatar-root {
    background-color: #ef6c00;
    margin-right: 16px;

    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
      width: 48px;
      height: 48px;
    }
  }
`
