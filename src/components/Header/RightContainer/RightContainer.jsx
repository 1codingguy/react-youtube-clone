import React from 'react'
import styled from 'styled-components'
import CreateVideoButton from './CreateVideoButton/CreateVideoButton'
import CreateVideoMenu from './CreateVideoButton/CreateVideoMenu'
import AppsButton from './AppsButton/AppsButton'
import AppsMenu from './AppsButton/AppsMenu'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import NotificationsMenu from './NotificationsButton/NotificationsMenu'
import AvatarButton from './AvatarButton/AvatarButton'
import AvatarMenu from './AvatarButton/AvatarMenu'
import { useGlobalContext } from '../../../context'

const RightContainer = () => {
  const { isMobileView } = useGlobalContext()

  return (
    <StyledRightContainer>
      {isMobileView ? null : (
        <>
          <CreateVideoButton />
          <CreateVideoMenu />

          <AppsButton />
          <AppsMenu />

          <NotificationsButton />
          <NotificationsMenu />
        </>
      )}

      <AvatarButton />
      <AvatarMenu />
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
