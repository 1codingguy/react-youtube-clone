import React from 'react'
import styled from 'styled-components/macro'
import Popover from '@material-ui/core/Popover'
import Paper from '@material-ui/core/Paper'
import { NotificationsContent } from './NotificationsContent'
import { NotificationsHeader } from './NotificationsHeader'

const NotificationsMenu = ({
  anchorNotificationsButton,
  handleNotificationsMenuClose,
}) => {
  return (
    <PopUpMenu
      anchorEl={anchorNotificationsButton}
      open={Boolean(anchorNotificationsButton)}
      onClose={handleNotificationsMenuClose}
    >
      <NotificationsContainer>
        <NotificationsHeader onClick={handleNotificationsMenuClose} />
        <NotificationsContent />
      </NotificationsContainer>
    </PopUpMenu>
  )
}

export default NotificationsMenu

const PopUpMenu = styled(({ className, ...props }) => (
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
    getContentAnchorEl={null}
    PaperProps={{ square: true }}
    transitionDuration={0}
    elevation={0}
  />
))`
  && {
    border: 1px solid #d3d4d5;
    border-top: 0;
    border-radius: 0;
    max-width: 480px;
    max-height: 481px;
    opacity: 0.5;
  }

  .MuiPaper-root {
    color: #030303;
  }
`
const NotificationsContainer = styled(Paper)`
  && {
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`
