import React from 'react'
import styled from 'styled-components'
import ChipsBar from '../ChipsBar/ChipsBar'
import Videos from '../Videos/Videos'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_MAX_WIDTH,
} from '../utils/utils'
import SidebarToShow from '../Sidebar/SidebarToShow'

const Main = () => {
  return (
    <StyledMain>
      <SidebarToShow />

      <ChipsBar />
      <Videos />
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
    padding-top: ${MOBILE_VIEW_HEADER_HEIGHT}px;
  }
  padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  min-height: 100vh;
`
