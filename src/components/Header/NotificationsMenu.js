import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

const NotificationsMenu = ({ anchorEl, handleClose }) => {
  return (
    <StyledNotificationsMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <StyledPaper>
        <NotificationsMenuTop>
          <Typography style={{ color: '#030303' }}>Notifications</Typography>
          <IconButton onClick={handleClose}>
            <SettingsOutlinedIcon />
          </IconButton>
        </NotificationsMenuTop>

        <NotificationsMenuContent>
          <TextCenterBox>
            <BigBellIcon />
            <Typography style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Your notifications live here
            </Typography>

            <Typography style={{ maxWidth: '60%', margin: 'auto' }}>
              Subscribe to your favourite channels to receive notifications
              about their latest videos.
            </Typography>
          </TextCenterBox>
        </NotificationsMenuContent>
      </StyledPaper>
    </StyledNotificationsMenu>
  )
}

export default NotificationsMenu

const NOTIFICATION_MENU_TOP_HEIGHT = '48px'

const StyledNotificationsMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderTop: 0,
    borderRadius: 0,
    maxWidth: '480px',
    maxHeight: '481px',
    opacity: 0.5,
  },
})((props) => (
  <Popover
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const NotificationsMenuTop = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NOTIFICATION_MENU_TOP_HEIGHT};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  padding-right: 16px;
`

const NotificationsMenuContent = styled(Box)`
  display: grid;
  place-items: center;
  height: calc(100% - ${NOTIFICATION_MENU_TOP_HEIGHT});
`

const StyledPaper = styled(Paper)`
  width: 450px;
  height: 450px;
`

const BigBellIcon = styled(NotificationsNoneOutlinedIcon)`
  /* needs !important to override CSS in .MuiSvgIcon-root */
  height: 100% !important;
  width: 120px !important;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 100;
  margin-bottom: 24px;
`
const TextCenterBox = styled(Box)`
  text-align: center;
`
