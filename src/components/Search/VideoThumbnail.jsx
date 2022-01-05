import React from 'react'
import styled from 'styled-components/macro'
import { ImageContainer, DurationContainer } from '../Videos/VideoCard'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'

export const VideoThumbnail = ({ thumbnailImage, formattedDuration }) => {
  return (
    <StyledImageContainer>
      <StyledImg src={thumbnailImage} />
      <DurationContainer variant="body2">{formattedDuration}</DurationContainer>
    </StyledImageContainer>
  )
}
export const StyledImageContainer = styled(ImageContainer)`
  display: grid;
  place-items: center;
  grid-template-columns: minmax(160px, 160px);
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    grid-template-columns: minmax(240px, 360px);
    margin-right: 12px;
  }
`
const StyledImg = styled.img`
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    height: auto;
    width: 100%;
  }
`
