import React from 'react'
import styled from 'styled-components/macro'
import Button from '@material-ui/core/Button'

export const ChannelSubscribeButton = () => {
  return (
    <SubscribeButtonContainer>
      <SubscribeButton size="small">SUBSCRIBE</SubscribeButton>
    </SubscribeButtonContainer>
  )
}
const SubscribeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`
const SubscribeButton = styled(Button)`
  && {
    background-color: #c00;
    color: white;
    /* font-size: 14px; */
    font-weight: 500;
    padding: 10px 16px;
    letter-spacing: 0.5px;
    border-radius: 2px;
    margin: 0 4px;

    &:hover {
      background-color: #c00;
    }
  }
`
