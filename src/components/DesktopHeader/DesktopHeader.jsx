import React, { useState } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'
import {
  IconTooltip,
  StyledBox,
  SHOW_SEARCH_BOX_WIDTH,
} from '../sharedComponents/sharedComponents'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import WifiTetheringIcon from '@material-ui/icons/WifiTethering'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import Popover from '@material-ui/core/Popover'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-regular {
    min-height: 56px;
    height: 56px;
  }

  .MuiToolbar-root {
    background-color: white;
    /* remove the border later */
    border-bottom: 1px solid lightgray;
  }
`

const RightContainer = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
  justify-content: space-between;

  /* doesn't work if StyledAvatar = styled(Avatar) */
  .MuiAvatar-root {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
    background-color: #ef6c00;
  }
`

const YouTubeKidsLogo = styled.img`
  height: 20px;
`

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

const AppsMenu = withStyles({
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
      horizontal: 'right',
    }}
    {...props}
  />
))

const NotificationsMenu = withStyles({
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

const NOTIFICATION_MENU_TOP_HEIGHT = '48px'

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

const StyledMenuItem = withStyles({
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  gutters: {
    paddingRight: '32px',
  },
})(MenuItem)

const StyledListItemIcon = withStyles({
  root: {
    minWidth: '0',
    marginRight: '16px',
  },
})(ListItemIcon)

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`

function DesktopHeader() {
  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)

  const handleClose = (event) => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
  }

  return (
    <>
      <StyledAppBar elevation={0}>
        <Toolbar>
          <LeftContainer />
          <MiddleContainer />

          <RightContainer>
            <IconTooltip title="Create">
              <IconButton
                onClick={(event) => setAnchorVideoButton(event.currentTarget)}
              >
                <VideoCallIcon />
              </IconButton>
            </IconTooltip>
            <CreateVideoMenu
              anchorEl={anchorVideoButton}
              keepMounted
              open={Boolean(anchorVideoButton)}
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

            <IconTooltip title="YouTube Apps">
              <IconButton
                onClick={(event) => setAnchorAppsButton(event.currentTarget)}
              >
                <AppsIcon />
              </IconButton>
            </IconTooltip>

            <AppsMenu
              anchorEl={anchorAppsButton}
              keepMounted
              open={Boolean(anchorAppsButton)}
              onClose={handleClose}
            >
              <StyledMenuItem
                style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
              >
                <StyledListItemIcon>
                  <RedYouTubeIcon fontSize="small" />
                </StyledListItemIcon>
                <ListItemText primary="YouTube TV" />
              </StyledMenuItem>

              <StyledMenuItem>
                <StyledListItemIcon>
                  <PlayCircleOutlineIcon
                    fontSize="small"
                    style={{ color: 'red' }}
                  />
                </StyledListItemIcon>
                <ListItemText primary="YouTube Music" />
              </StyledMenuItem>

              <StyledMenuItem
                style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
              >
                <StyledListItemIcon>
                  <YouTubeKidsLogo src="https://upload.wikimedia.org/wikipedia/commons/4/48/YT_kids.png" />
                </StyledListItemIcon>
                <ListItemText primary="YouTube Kids" />
              </StyledMenuItem>

              <StyledMenuItem>
                <StyledListItemIcon>
                  <RedYouTubeIcon fontSize="small" />
                </StyledListItemIcon>
                <ListItemText primary="Creator Academy" />
              </StyledMenuItem>

              <StyledMenuItem>
                <StyledListItemIcon>
                  <RedYouTubeIcon fontSize="small" />
                </StyledListItemIcon>
                <ListItemText primary="YouTube for Artists" />
              </StyledMenuItem>
            </AppsMenu>

            <IconTooltip title="Notifications">
              <IconButton
                onClick={(event) =>
                  setAnchorNotificationsButton(event.currentTarget)
                }
              >
                <NotificationsNoneSharpIcon />
              </IconButton>
            </IconTooltip>

            <NotificationsMenu
              anchorEl={anchorNotificationsButton}
              keepMounted
              open={Boolean(anchorNotificationsButton)}
              onClose={handleClose}
            >
              <Paper style={{ width: '450px', height: '450px' }}>
                <NotificationsMenuTop>
                  <Typography style={{ color: '#030303' }}>
                    Notifications
                  </Typography>
                  <IconButton>
                    <SettingsOutlinedIcon />
                  </IconButton>
                </NotificationsMenuTop>
                <NotificationsMenuContent>
                  <Box style={{ textAlign: 'center' }}>
                    <NotificationsNoneOutlinedIcon
                      style={{
                        fontSize: '120px',
                        color: 'rgba(0, 0, 0, 0.54)',
                        fontWeight: '100',
                        marginBottom: '24px',
                      }}
                    />
                    <Typography
                      style={{ fontWeight: 'bold', marginBottom: '8px' }}
                    >
                      Your notifications live here
                    </Typography>
                    <Typography style={{ maxWidth: '60%', margin: 'auto' }}>
                      Subscribe to your favourite channels to receive
                      notifications about their latest videos.
                    </Typography>
                  </Box>
                </NotificationsMenuContent>
              </Paper>
            </NotificationsMenu>

            <IconButton>
              <Avatar>C</Avatar>
            </IconButton>
          </RightContainer>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default DesktopHeader
