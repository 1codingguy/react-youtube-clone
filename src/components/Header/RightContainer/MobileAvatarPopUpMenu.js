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

import { useGlobalContext } from '../../../context'

function MobileAvatarPopUpMenu() {
  const { anchorAvatarButton, handleRightContainerMenusClose } =
    useGlobalContext()

  return (
    <MobileAvatarMenuContainer
      anchorEl={anchorAvatarButton}
      open={Boolean(anchorAvatarButton)}
      onClose={handleRightContainerMenusClose}
    >
      <MobileAvatarMenuHeader />
      <AvatarAccountInfo />

      <MobileUpButton />
      <Divider />

      <MobileAvatarMenuTop />
      <Divider />

      <MobileAvatarMenuBottom />
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

const MobileUpButton = () => {
  const { handleRightContainerMenusClose } = useGlobalContext()
  return (
    <StyledFab onClick={handleRightContainerMenusClose}>
      <ArrowUpwardOutlinedIcon style={{ fontSize: '20px' }} />
    </StyledFab>
  )
}

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    top: 142px;
    right: 20px;
    background-color: #ff0000;
    color: white;
  }
`
