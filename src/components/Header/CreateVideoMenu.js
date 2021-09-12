import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import { StyledListItem, StyledMenuItem } from './StyledMenuItem'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering'

const CreateVideoMenu = ({ anchorVideoButton, handleClose }) => {
  return (
    <StyledVideoMenu
      anchorEl={anchorVideoButton}
      // keepMounted
      open={Boolean(anchorVideoButton)}
      onClose={handleClose}
      transitionDuration={0}
    >
      {menuItems.map(({ Icon, text }) => {
        return (
          <StyledMenuItem key={text} onClick={handleClose}>
            <StyledListItem Icon={Icon} text={text} />
          </StyledMenuItem>
        )
      })}
    </StyledVideoMenu>
  )
}

export default CreateVideoMenu

const menuItems = [
  { Icon: PlayArrowIcon, text: 'Upload video' },
  { Icon: WifiTetheringIcon, text: 'Go live' },
]

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
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))

const StyledVideoMenu = styled(VideoMenu)`
  .MuiTypography-body1 {
    font-size: 14px;
  }
`
