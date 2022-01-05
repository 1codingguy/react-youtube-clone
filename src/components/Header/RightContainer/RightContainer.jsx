import React from 'react'
import styled from 'styled-components/macro'
import CreateVideoButton from './CreateVideoButton/CreateVideoButton'
import AppsButton from './AppsButton/AppsButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import AvatarButton from './AvatarButton/AvatarButton'
import { useIsMobileView } from '../../../utils/utils'
import { useLocation } from 'react-router-dom'
import { HeaderMoreButton } from './HeaderMoreButton'

const RightContainer = () => {
  const isMobileView = useIsMobileView()
  const currentLocation = useLocation()
  const isInSearchResultsPage = currentLocation.pathname === '/results'

  if (isMobileView) {
    return (
      <StyledRightContainer>
        {isInSearchResultsPage ? <HeaderMoreButton /> : <AvatarButton />}
      </StyledRightContainer>
    )
  } else {
    return (
      <StyledRightContainer>
        <CreateVideoButton />
        <AppsButton />
        <NotificationsButton />
        <AvatarButton />
      </StyledRightContainer>
    )
  }
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
