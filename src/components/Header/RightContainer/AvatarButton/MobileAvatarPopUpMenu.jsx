import React from 'react'
import styled from 'styled-components'
import Popover from '@material-ui/core/Popover'
import Divider from '@material-ui/core/Divider'
import { AvatarAccountInfo } from './AvatarAccountInfo'
import { MobileAvatarMenuBottom } from "./MobileAvatarMenuBottom"
import { MobileAvatarMenuTop } from "./MobileAvatarMenuTop"
import { MobileAvatarMenuHeader } from './MobileAvatarMenuHeader'
import { MobileUpButton } from './MobileUpButton'

function MobileAvatarPopUpMenu({ anchorAvatarButton, handleAvatarMenuClose }) {
  

  return (
    <MobileAvatarMenuContainer
      anchorEl={anchorAvatarButton}
      open={Boolean(anchorAvatarButton)}
      onClose={handleAvatarMenuClose}
    >
      <MobileAvatarMenuHeader onClick={handleAvatarMenuClose} />
      <AvatarAccountInfo onClick={handleAvatarMenuClose} />
      <MobileUpButton onClick={handleAvatarMenuClose} />
      <Divider />
      <MobileAvatarMenuTop onClick={handleAvatarMenuClose}/>
      <Divider />
      <MobileAvatarMenuBottom onClick={handleAvatarMenuClose}/>
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