import React, { useState } from 'react'
import styled from 'styled-components'

// Custom elements & components
import CreateVideoButton from './CreateVideoButton'
import CreateVideoMenu from './CreateVideoMenu'
import AppsButton from './AppsButton'
import AppsMenu from './AppsMenu'
import NotificationsButton from './NotificationsButton'
import NotificationsMenu from './NotificationsMenu'
import AvatarButton from './AvatarButton'
import AvatarMenu from './AvatarMenu'

const RightContainer = ({ isMobileView }) => {
  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)
  const [anchorAvatar, setAnchorAvatar] = useState(null)

  const handleClose = () => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
    setAnchorAvatar(null)
  }

  return (
    <StyledRightContainer>
      {isMobileView ? null : (
        <>
          <CreateVideoButton setAnchorVideoButton={setAnchorVideoButton} />
          <CreateVideoMenu
            anchorVideoButton={anchorVideoButton}
            handleClose={handleClose}
          />

          <AppsButton setAnchorAppsButton={setAnchorAppsButton} />
          <AppsMenu anchorEl={anchorAppsButton} handleClose={handleClose} />

          <NotificationsButton
            setAnchorNotificationsButton={setAnchorNotificationsButton}
          />
          <NotificationsMenu
            anchorEl={anchorNotificationsButton}
            handleClose={handleClose}
          />
        </>
      )}

      <AvatarButton setAnchorAvatar={setAnchorAvatar} />

      <AvatarMenu
        anchorEl={anchorAvatar}
        handleClose={handleClose}
        isMobileView={isMobileView}
      />
    </StyledRightContainer>
  )
}

export default RightContainer

const StyledRightContainer = styled.div`
  color: #030303;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-wrap: nowrap;
  justify-content: space-between;
`
