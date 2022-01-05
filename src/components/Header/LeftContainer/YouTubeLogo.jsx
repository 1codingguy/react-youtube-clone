import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import Tooltip from '@material-ui/core/Tooltip'
import { TWO_COL_MIN_WIDTH } from '../../../utils/utils'
import { useIsMobileView } from '../../../utils/utils'

const YouTubeLogo = () => {
  const fullLogoUrl =
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
  const smallLogoUrl =
    'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'

  const isMobileView = useIsMobileView()
  const currentLocation = useLocation()
  const isInSearchResultsPage = currentLocation.pathname === '/results'

  return (
    <Link to="/">
      <YouTubeLogoTooltip title="YouTube Home">
        <YouTubeLogoContainer>
          <Logo
            src={
              isInSearchResultsPage && isMobileView ? smallLogoUrl : fullLogoUrl
            }
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
  margin: auto 1rem;
  height: 20px;
  cursor: pointer;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    margin: auto 16px;
  }
`
