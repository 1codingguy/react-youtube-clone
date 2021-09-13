import React from 'react'
import styled from 'styled-components'
import Popover from '@material-ui/core/Popover'
import Divider from '@material-ui/core/Divider'
import Fab from '@material-ui/core/Fab'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import { AvatarAccountInfo } from './AvatarAccountInfo'
import {
  MobileAvatarMenuTop,
  MobileAvatarMenuBottom,
} from './mobileAvatarMenuData'
import { MobileAvatarMenuHeader } from './MobileAvatarMenuHeader'

function MobileAvatarPopUpMenu({ anchorEl, handleClose, isMobileView }) {
  return (
    <MobileAvatarMenuContainer
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MobileAvatarMenuHeader onClick={handleClose} />

      <AvatarAccountInfo isMobileView={isMobileView} onClick={handleClose} />

      <MobileUpButton onClick={handleClose} />
      <Divider />

      <MobileAvatarMenuTop onClick={handleClose} />
      <Divider />

      <MobileAvatarMenuBottom onClick={handleClose} />
    </MobileAvatarMenuContainer>
  )
}

export default MobileAvatarPopUpMenu

const MobileAvatarMenuContainer = styled(({ className, ...props }) => (
  <Popover
    {...props}
    classes={{ paper: className }}
    anchorReference="anchorPosition"
    anchorPosition={{ top: 0, left: 0 }}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transitionDuration={0}
    getContentAnchorEl={null}
    PaperProps={{ square: true }}
    elevation={0}
  />
))`
  && {
    min-width: 100vw;
    min-height: 100vh;
    top: 0px !important;
    left: 0px !important;
  }
`

const MobileUpButton = ({ onClick }) => (
  <StyledFab onClick={onClick}>
    <ArrowUpwardOutlinedIcon style={{ fontSize: '20px' }} />
  </StyledFab>
)

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    top: 142px;
    right: 20px;
    background-color: #ff0000;
    color: white;
  }
`
