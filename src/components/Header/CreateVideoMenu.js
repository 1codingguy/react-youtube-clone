import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import { StyledListItem, StyledMenuItem } from './StyledMenuItem'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering'

const VideoMenu = withStyles({
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
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const CreateVideoMenu = ({ anchorVideoButton, handleClose }) => {
  return (
    <VideoMenu
      anchorEl={anchorVideoButton}
      keepMounted
      open={Boolean(anchorVideoButton)}
      onClose={handleClose}
    >
      <StyledMenuItem>
        <StyledListItem
          Icon={PlayArrowIcon}
          text="Upload video"
        />
      </StyledMenuItem>

      <StyledMenuItem>
        <StyledListItem
          Icon={WifiTetheringIcon}
          text="Go live"
        />
      </StyledMenuItem>
    </VideoMenu>
  )
}

export default CreateVideoMenu
