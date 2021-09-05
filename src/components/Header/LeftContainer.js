import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import {
  YouTubeLogoTooltip,
  YouTubeLogoContainer,
  YouTubeLogo,
  StyledBox,
} from '../utils/utils'

function LeftContainer({ isMobileView }) {
  return (
    <StyledLeftContainer padding={0}>
      {isMobileView || (
        <IconButton>
          <MenuIcon />
        </IconButton>
      )}

      <YouTubeLogoTooltip title="YouTube Home">
        <YouTubeLogoContainer>
          <YouTubeLogo
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />
        </YouTubeLogoContainer>
      </YouTubeLogoTooltip>
    </StyledLeftContainer>
  )
}
export default LeftContainer

const StyledLeftContainer = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
`
