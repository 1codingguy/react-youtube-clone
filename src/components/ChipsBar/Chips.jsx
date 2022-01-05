import React from 'react'
import styled from 'styled-components/macro'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'
import Chip from '@material-ui/core/Chip'
import countries from './chipsArray'

export const Chips = ({
  selectedChipIndex,
  setSelectedChipIndex,
  setLandingPageVideos,
  setPopularVideosNextPageToken,
}) => {
  const handleChipClick = (index) => {
    setSelectedChipIndex(index)
    // reset landingPageVideos & popularVideosNextPageToken to default when select another chip
    setLandingPageVideos([])
    setPopularVideosNextPageToken(null)
  }

  return countries.map(({ country }, index) => {
    return (
      <StyledChip
        key={country}
        label={country}
        // console says it's an error to have boolean value of true
        active={index === selectedChipIndex ? `true` : null}
        onClick={() => handleChipClick(index)}
        component="li"
      />
    )
  })
}

const StyledChip = styled(Chip)`
  && {
    margin-right: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    /* active chip in mobile view has grey background */
    background-color: ${(props) =>
      props.active ? '#606060' : 'rgba(0, 0, 0, 0.05)'};
    color: ${(props) => (props.active ? 'white' : '#030303')};

    &:hover,
    &:focus {
      background-color: ${(props) => props.active && '#606060'};
      color: ${(props) => props.active && 'white'};
    }

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      /* active chip in desktop view has black background */
      background-color: ${(props) =>
        props.active ? 'black' : 'rgba(0, 0, 0, 0.05)'};
      color: ${(props) => (props.active ? 'white' : '#030303')};
      &:hover,
      &:focus {
        background-color: ${(props) => props.active && 'black'};
        color: ${(props) => props.active && 'white'};
      }
    }
  }

  .MuiChip-label {
    padding: 0 12px;
    font-size: 0.875rem;
  }
`
