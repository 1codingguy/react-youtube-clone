import React from 'react'
import styled from 'styled-components'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Videos from '../Videos/Videos'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  MOBILE_VIEW_BREAKPOINT,
} from '../utils/utils'
import { useGlobalContext } from '../../context'

const Main = () => {
  const { SidebarToShow } = useGlobalContext()

  return (
    <StyledMain>
      <SidebarToShow />

      <CategoriesBar />
      <Videos />
    </StyledMain>
  )
}

export default Main

const StyledMain = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    padding-top: ${MOBILE_VIEW_HEADER_HEIGHT}px;
  }
  padding-top: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  min-height: 100vh;
  /* display: flex; */

  /* .main-right-container {
    width: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  } */
`
