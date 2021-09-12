import React from 'react'
import styled from 'styled-components'
import Popover from '@material-ui/core/Popover'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'

// custom component and utils
import MobileAvatarPopUpMenu from './MobileAvatarPopUpMenu'
import { AvatarAccountInfo } from './AvatarAccountInfo'
import { StyledMenuItem } from '../StyledMenuItem'
import { AvatarMenuTop, AvatarMenuMiddle } from './AvatarMenuData'

const AvatarMenu = ({ anchorEl, handleClose, isMobileView }) => {
  if (isMobileView) {
    return (
      <MobileAvatarPopUpMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        isMobileView={isMobileView}
      />
    )
  }
  return <AvatarPopUpMenu anchorEl={anchorEl} handleClose={handleClose} />
}

export default AvatarMenu

function AvatarPopUpMenu({ anchorEl, handleClose }) {
  return (
    <StyledAvatarMenu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <AvatarAccountInfo onClick={handleClose} />
      <Divider />
      <AvatarMenuTop onClick={handleClose} />
      <Divider />
      <AvatarMenuMiddle onClick={handleClose} />
      <Divider />
      <AvatarMenuBottom onClick={handleClose} />
    </StyledAvatarMenu>
  )
}

const AvatarMenuBottom = ({ onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <ListItemText>Restricted Mode: Off</ListItemText>
      <ChevronRightIcon style={{ fontSize: '20px' }} />
    </StyledMenuItem>
  )
}

const StyledAvatarMenu = styled(({ className, ...props }) => (
  <Popover
    {...props}
    classes={{ paper: className, list: 'list' }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    marginThreshold={0}
    transitionDuration={0}
    getContentAnchorEl={null}
    PaperProps={{ square: true }}
    elevation={0}
  />
))`
  border: 1px solid #d3d4d5;
  border-top: 0;
  border-radius: 0;
  // not sure how to set the height to avoid popover snapping to the top of window when the screen size is small
  width: 300px;
  opacity: 0.5;

  .MuiTypography-body1 {
    font-size: 14px;
  }
`
