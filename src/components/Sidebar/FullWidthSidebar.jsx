import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import {
  FULL_SIDEBAR_WIDTH,
  StyledMenuItem,
  useShouldOpenSidebarDrawer,
  DESKTOP_VIEW_HEADER_HEIGHT,
} from '../utils/utils'
import { SidebarFirstPart } from './SidebarFirstPart'
import { SidebarSecondPart } from './SidebarSecondPart'
import { SidebarThirdPart } from './SidebarThirdPart'

const FullWidthSidebar = () => {
  const shouldOpenSidebarDrawer = useShouldOpenSidebarDrawer()

  return (
    <StyledFullWidthSidebar
      // no position fixed for FullWidthSidebar in a drawer
      style={shouldOpenSidebarDrawer ? null : { position: 'fixed' }}
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
  width: ${FULL_SIDEBAR_WIDTH}px;
  height: ${(props) =>
    props.drawer ? '100%' : `calc(100% - ${DESKTOP_VIEW_HEADER_HEIGHT}px)`};
  overflow-y: scroll;
  background-color: white;
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
