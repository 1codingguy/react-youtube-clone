import React, { useState } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'
import { StyledBox } from '../sharedComponents/sharedComponents'


import LeftContainer from './LeftContainer'
import MiddleContainer from './MiddleContainer'
import FocusableIcon from './FocusableIcon'

// Right Container components, to be re-factor again
import CreateVideoMenu from './CreateVideoMenu'
import AppsMenu from './AppsMenu'
import NotificationsMenu from './NotificationsMenu'

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
            <FocusableIcon
              tooltipTitle="Create"
              Icon={VideoCallIcon}
              onClick={(event) => setAnchorVideoButton(event.currentTarget)}
            />

            <CreateVideoMenu
              anchorVideoButton={anchorVideoButton}
              handleClose={handleClose}
            />

            <FocusableIcon
              tooltipTitle="YouTube Apps"
              Icon={AppsIcon}
              onClick={(event) => setAnchorAppsButton(event.currentTarget)}
            />

            <AppsMenu anchorEl={anchorAppsButton} handleClose={handleClose} />

            <FocusableIcon
              tooltipTitle="Notifications"
              Icon={NotificationsNoneSharpIcon}
              onClick={(event) =>
                setAnchorNotificationsButton(event.currentTarget)
              }
            />

            <NotificationsMenu
              anchorEl={anchorNotificationsButton}
              handleClose={handleClose}
            />


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
