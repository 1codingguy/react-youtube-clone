import React from 'react'
import styled from 'styled-components'
import { TWO_COL_MIN_WIDTH } from '../utils/utils'

export const ChannelImage = ({ thumbnailImage }) => {
  return (
    <StyledChannelImageContainer>
      <ChannelImg src={thumbnailImage} />
    </StyledChannelImageContainer>
  )
}
const StyledChannelImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 160px;

  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    min-width: 240px;
    max-width: 360px;
    margin-right: 12px;
    flex: 1 0 50%;
    width: 100%;
  }
`
const ChannelImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    height: 136px;
    width: 136px;
  }
`
