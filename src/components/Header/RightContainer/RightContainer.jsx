import React from 'react'
import styled from 'styled-components'
import CreateVideoButton from './CreateVideoButton/CreateVideoButton'
import AppsButton from './AppsButton/AppsButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import AvatarButton from './AvatarButton/AvatarButton'
import { useIsMobileView } from '../../utils/utils'

const RightContainer = () => {
  const isMobileView = useIsMobileView()

  return (
    <StyledRightContainer>
      {isMobileView ? null : (
        <>
          <CreateVideoButton />
          <AppsButton />
          <NotificationsButton />
        </>
      )}

      <AvatarButton />
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
