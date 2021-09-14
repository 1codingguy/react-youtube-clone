import React from 'react'
import styled from 'styled-components'
import Popover from '@material-ui/core/Popover'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'

// custom component and utils
import MobileAvatarPopUpMenu from './MobileAvatarPopUpMenu'
import { AvatarAccountInfo } from './AvatarAccountInfo'
import { StyledMenuItem } from '../../utils/utils'
import { AvatarMenuTop, AvatarMenuMiddle } from './AvatarMenuData'
import { useGlobalContext } from '../../../context'

const AvatarMenu = () => {
  const { isMobileView } = useGlobalContext()

  if (isMobileView) {
    return <MobileAvatarPopUpMenu />
  }
  return <AvatarPopUpMenu />
}

export default AvatarMenu

function AvatarPopUpMenu() {
  const { anchorAvatarButton, handleRightContainerMenusClose } =
    useGlobalContext()

  return (
    <StyledAvatarMenu
      anchorEl={anchorAvatarButton}
      open={Boolean(anchorAvatarButton)}
      onClose={handleRightContainerMenusClose}
    >
      <AvatarAccountInfo />
      <Divider />
      <AvatarMenuTop />
      <Divider />
      <AvatarMenuMiddle />
      <Divider />
      <AvatarMenuBottom />
    </StyledAvatarMenu>
  )
}

const AvatarMenuBottom = () => {
  const { handleRightContainerMenusClose } = useGlobalContext()

  return (
    <StyledMenuItem onClick={handleRightContainerMenusClose}>
      <ListItemText>Restricted Mode: Off</ListItemText>
      <ChevronRightIcon style={{ fontSize: '20px' }} />
    </StyledMenuItem>
  )
}

const StyledAvatarMenu = styled(({ className, ...props }) => (
  <Popover
    {...props}
    classes={{ paper: className }}
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
  // not sure how to set the height to avoid Popover snapping to the top of window when the screen size is small
  width: 300px;
  opacity: 0.5;

  .MuiTypography-body1 {
    font-size: 14px;
  }
`
