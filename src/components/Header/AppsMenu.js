import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import { StyledListItem, StyledMenuItem } from './StyledMenuItem'

import YouTubeIcon from '@material-ui/icons/YouTube'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

const StyledAppsMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderTop: 0,
    borderRadius: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const bottomDividerLine = { borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`
const YouTubeKidsLogo = styled.img`
  height: 20px;
`

const AppsMenu = ({ anchorEl, handleClose }) => {
  return (
    <StyledAppsMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <StyledMenuItem style={bottomDividerLine}>
        <StyledListItem Icon={RedYouTubeIcon} text="YouTube TV" />
      </StyledMenuItem>

      <StyledMenuItem>
        <StyledListItem
          Icon={PlayCircleOutlineIcon}
          text="YouTube Music"
          iconColor={{ color: 'red' }}
        />
      </StyledMenuItem>

      <StyledMenuItem style={bottomDividerLine}>
        <StyledListItem
          Icon={YouTubeKidsLogo}
          text="YouTube Kids"
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/YT_kids.png"
        />
      </StyledMenuItem>

      <StyledMenuItem>
        <StyledListItem Icon={RedYouTubeIcon} text="Creator Academy" />
      </StyledMenuItem>

      <StyledMenuItem>
        <StyledListItem Icon={RedYouTubeIcon} text="YouTube for Artists" />
      </StyledMenuItem>
      
    </StyledAppsMenu>
  )
}

export default AppsMenu
