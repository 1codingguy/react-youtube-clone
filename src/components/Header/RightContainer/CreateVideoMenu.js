import React from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/core/Menu'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledMenuItem, StyledListItemIcon } from '../../utils/StyledMenuItem'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering'
import { DEFAULT_FONT_SIZE } from '../../utils/utils'

const CreateVideoMenu = ({ anchorVideoButton, handleClose }) => {
  return (
    <VideoMenu
      anchorEl={anchorVideoButton}
      // keepMounted
      open={Boolean(anchorVideoButton)}
      onClose={handleClose}
    >
      {menuItems.map(({ Icon, text }) => {
        return (
          <StyledMenuItem key={text} onClick={handleClose}>
            <StyledListItemIcon>
              <Icon fontSize="small" />
            </StyledListItemIcon>
            <ListItemText primary={text} />
          </StyledMenuItem>
        )
      })}
    </VideoMenu>
  )
}

export default CreateVideoMenu

const menuItems = [
  { Icon: PlayArrowIcon, text: 'Upload video' },
  { Icon: WifiTetheringIcon, text: 'Go live' },
]

const VideoMenu = styled(({ className, ...props }) => (
  <Menu
    {...props}
    classes={{ paper: className }}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    PaperProps={{ square: true }}
    transitionDuration={0}
    elevation={0}
  />
))`
  border: 1px solid #d3d4d5;
  border-top: 0;
  /* border-radius: 0; */

  .MuiTypography-body1 {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`
