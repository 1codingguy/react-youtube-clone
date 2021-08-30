import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import {StyledMenuItem, StyledListItemIcon} from './DebugStyledMenuItem'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering'
import ListItemText from '@material-ui/core/ListItemText'


const CreateVideoMenu = withStyles({
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

const DebugCreateVideoMenu = ({ anchorEl, handleClose }) => {
  return (
    <CreateVideoMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <StyledMenuItem>
        <StyledListItemIcon>
          <PlayArrowIcon fontSize="small" />
        </StyledListItemIcon>
        <ListItemText primary="Upload video" />
      </StyledMenuItem>

      <StyledMenuItem>
        <StyledListItemIcon>
          <WifiTetheringIcon fontSize="small" />
        </StyledListItemIcon>
        <ListItemText primary="Go live" />
      </StyledMenuItem>

      
    </CreateVideoMenu>
  )
}

export default DebugCreateVideoMenu
