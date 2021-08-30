import React, { useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'
import {
  YouTubeLogoTooltip,
  IconTooltip,
  YouTubeLogoContainer,
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
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const SHOW_SEARCH_BOX_WIDTH = '657px'

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

const StyledBox = styled(Box)`
  color: #030303;
  padding: ${(props) => props.padding};
  height: 100%;
  display: flex;
  align-items: center;

  /* doesn't work if StyledIconButton = styled(IconButton) */
  .MuiIconButton-root {
    padding: 8px;
  }
`

const LeftContainer = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
`

const MiddleContainer = styled(StyledBox)`
  flex-grow: 1;
  justify-content: flex-end;

  @media screen and (min-width: ${SHOW_SEARCH_BOX_WIDTH}) {
    justify-content: center;
    margin-right: 2rem;
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

const YouTubeLogo = styled.img`
  height: 20px;
  margin: auto 1rem;
  cursor: pointer;
`

const YouTubeKidsLogo = styled.img`
  height: 20px;
`

const StyledForm = styled.form`
  flex-grow: 1;
  margin-left: 40px;
  display: flex;
  max-width: 640px;
  border: 0.2px solid lightgray;
`

const SearchBox = styled.input`
  border: none;
  padding: 1px 2px;
  padding-left: 12px;
  height: 30px;
  width: 100%;

  &::placeholder {
    font-family: $font-default;
    color: #909090;
    font-size: 1rem;
  }
`

const SearchIconContainer = styled(Box)`
  width: 72px;
  height: 30px;
  /* background-color: red; */
  display: grid;
  place-items: center;
  flex-grow: 1;
  cursor: pointer;
  border-left: 0.2px solid lightgray;
  background-color: #f8f8f8;

  &:hover {
    background-color: #f0f0f0;
  }
`

const StyledIconButton = styled(IconButton)`
  height: 30px;
  padding: 1px 6px;

  /* This is to target .MuiIconButton-root:hover{}
  & :hover {
    background-color: none;
  } */
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
  const showSearchBox = useMediaQuery({ minWidth: SHOW_SEARCH_BOX_WIDTH })

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
          <LeftContainer padding={'8px'}>
            <IconButton>
              <MenuIcon />
            </IconButton>

            <YouTubeLogoTooltip title="YouTube Home">
              <YouTubeLogoContainer>
                <YouTubeLogo
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                  alt="logo"
                />
              </YouTubeLogoContainer>
            </YouTubeLogoTooltip>
          </LeftContainer>

          <MiddleContainer>
            {showSearchBox ? (
              <StyledForm>
                <SearchBox placeholder="Search" />
                <IconTooltip title="Search">
                  <SearchIconContainer>
                    <StyledIconButton>
                      <SearchIcon />
                    </StyledIconButton>
                  </SearchIconContainer>
                </IconTooltip>
              </StyledForm>
            ) : (
              <IconTooltip title="Search">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </IconTooltip>
            )}
            <IconTooltip title="Search with your voice">
              <IconButton>
                <MicIcon />
              </IconButton>
            </IconTooltip>
          </MiddleContainer>

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
