import React from 'react'
import styled from 'styled-components/macro'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'
import { StyledImageContainer } from './VideoThumbnail'

export const ChannelImage = ({ thumbnailImage }) => {
  return (
    <StyledImageContainer>
      <ChannelImg src={thumbnailImage} />
    </StyledImageContainer>
  )
}

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
