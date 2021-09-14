import React from 'react'
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
