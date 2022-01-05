import React from 'react'
import styled from 'styled-components/macro'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import { NOTIFICATION_MENU_TOP_HEIGHT } from '../../../../utils/utils'

export const NotificationsContent = () => {
  return (
    <ContentContainer>
      <BigBellIcon />
      <Title>Your notifications live here</Title>
      <Content>
        Subscribe to your favourite channels to receive notifications about
        their latest videos.
      </Content>
    </ContentContainer>
  )
}

const ContentContainer = styled(Box)`
  display: grid;
  place-items: center;
  max-height: calc(100% - ${NOTIFICATION_MENU_TOP_HEIGHT}px);
  text-align: center;
`

const BigBellIcon = styled(NotificationsNoneOutlinedIcon)`
  && {
    height: 100%;
    width: 120px;
  }
  color: rgba(0, 0, 0, 0.54);
  font-weight: 100;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`

const Title = styled(Typography)`
  && {
    font-weight: bold;
    margin-bottom: 8px;
  }
`

const Content = styled(Typography)`
  && {
    max-width: 60%;
    margin: auto;
    margin-bottom: 3rem;
  }
`
