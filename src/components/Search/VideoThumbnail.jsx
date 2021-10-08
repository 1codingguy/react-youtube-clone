import React from 'react'
import styled from 'styled-components'
import { ImageContainer, DurationContainer } from '../Videos/VideoCard'
import { TWO_COL_MIN_WIDTH } from '../utils/utils'

export const VideoThumbnail = ({ thumbnailImage, formattedDuration }) => {
  return (
    <StyledImageContainer>
      <StyledImg src={thumbnailImage} />
      <DurationContainer variant="body2">{formattedDuration}</DurationContainer>
    </StyledImageContainer>
  )
}
const StyledImageContainer = styled(ImageContainer)`
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    min-width: 240px;
    max-width: 360px;
    margin-right: 12px;
    flex: 1 0 50%;
    width: 100%;
  }
`
const StyledImg = styled.img`
  height: 100%;
  cursor: pointer;

  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    height: auto;
    width: 100%;
  }
`
