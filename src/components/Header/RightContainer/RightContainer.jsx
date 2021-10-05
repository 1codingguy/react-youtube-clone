import React from 'react'
import styled from 'styled-components'
import CreateVideoButton from './CreateVideoButton/CreateVideoButton'
import AppsButton from './AppsButton/AppsButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import AvatarButton from './AvatarButton/AvatarButton'
import { useIsMobileView } from '../../utils/utils'
import { useLocation } from 'react-router-dom'
import { HeaderMoreButton } from './HeaderMoreButton'

const RightContainer = () => {
  const isMobileView = useIsMobileView()
  const currentLocation = useLocation()
  // console.log(currentLocation)
  const isInSearchResultsPage = currentLocation.pathname === '/results'

  return (
    <StyledRightContainer>
      {isMobileView ? null : (
        <>
          <CreateVideoButton />
          <AppsButton />
          <NotificationsButton />
        </>
      )}
      {/* in mobile search result page a more button on the right */}
      {isInSearchResultsPage ? (
        <HeaderMoreButton />
      ) : (
        // in mobile landing page an avatar button on the right
        <AvatarButton />
      )}
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
