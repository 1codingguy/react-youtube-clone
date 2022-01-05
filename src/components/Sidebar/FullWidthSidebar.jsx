import React from 'react'
import styled from 'styled-components/macro'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import {
  FULL_SIDEBAR_WIDTH,
  StyledMenuItem,
  useShouldOpenSidebarDrawer,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../../utils/utils'
import { SidebarFirstPart } from './SidebarFirstPart'
import { SidebarSecondPart } from './SidebarSecondPart'
import { SidebarThirdPart } from './SidebarThirdPart'
import { CUSTOM_SCROLLBAR_CSS } from '../../CUSTOM_SCROLLBAR_CSS'
import { useLocation } from 'react-router-dom'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

const FullWidthSidebar = () => {
  const shouldOpenSidebarDrawer = useShouldOpenSidebarDrawer()
  const isInSearchResultsPage = useLocation().pathname === '/results'
  const [isSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)

  return (
    <StyledFullWidthSidebar
      // no position fixed for FullWidthSidebar in a drawer
      isDrawer={isSidebarDrawerOpen}
      isFullSidebar={!shouldOpenSidebarDrawer}
      isInSearchResultsPage={isInSearchResultsPage}
    >
      <SidebarFirstPart />
      <Divider />
      <SidebarSecondPart />
      <DividerWithMargin />
      <SidebarThirdPart />
    </StyledFullWidthSidebar>
  )
}

export default FullWidthSidebar

const StyledFullWidthSidebar = styled.div`
  position: ${({ isFullSidebar }) => (isFullSidebar ? `fixed` : null)};
  padding-top: ${({ isInSearchResultsPage, isDrawer }) =>
    isDrawer ? 0 : isInSearchResultsPage ? DESKTOP_VIEW_HEADER_HEIGHT : 0}px;
  width: ${FULL_SIDEBAR_WIDTH}px;
  height: ${({ isDrawer, isInSearchResultsPage }) =>
    isDrawer
      ? '100%'
      : isInSearchResultsPage
      ? '100%'
      : `calc(100% - ${DESKTOP_VIEW_HEADER_HEIGHT}px)`};
  background-color: white;
  &:hover {
    /* scrollbar only visible when hover on FullSidebar. In drawer sidebar always visible */
    ${({ isDrawer }) => !isDrawer && CUSTOM_SCROLLBAR_CSS}
  }
`

export const DividerWithMargin = styled(Divider)`
  && {
    margin: 12px 0;
  }
`

export const SubHeading = styled(Typography)`
  && {
    font-size: 14px;
    font-weight: 500;
    padding: 8px 24px;
    color: #606060;
  }
`
export const SidebarMenuItem = styled(StyledMenuItem)`
  && {
    padding: 0 24px;
  }

  .MuiListItemIcon-root {
    margin-right: 24px;
    color: rgb(3, 3, 3);
  }
  .MuiTypography-body1 {
    font-size: 14px;
    color: #030303;
  }
`
