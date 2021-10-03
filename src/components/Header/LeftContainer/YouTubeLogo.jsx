import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import { MOBILE_VIEW_MAX_WIDTH } from '../../utils/utils'

const YouTubeLogo = () => {
  return (
    <Link to='/'>
    <YouTubeLogoTooltip title="YouTube Home">
      <YouTubeLogoContainer>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="logo"
        />
      </YouTubeLogoContainer>
    </YouTubeLogoTooltip>
    </Link>
  )
}

export default YouTubeLogo

const YouTubeLogoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  /* it has to be popper in classes, then specify .MuiToolTip-tooltip, not sure why  */
  .MuiTooltip-tooltip {
    background-color: white;
    color: gray;
    border: 1px solid gray;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
  }
`

const YouTubeLogoContainer = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
`

const Logo = styled.img`
  @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
    margin: auto 1rem;
  }
  height: 20px;
  cursor: pointer;
  margin: auto 16px;
`
