import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { StyledMenuItem } from '../utils/utils'
import { SidebarFirstPart } from './SidebarFirstPart'
import { SidebarSecondPart } from './SidebarSecondPart'
import { SidebarThirdPart } from './SidebarThirdPart'
import { FULL_SIDEBAR_WIDTH } from '../utils/utils'
import { useGlobalContext } from '../../context'

const FullWidthSidebar = () => {
  const { shouldOpenSidebarDrawer } = useGlobalContext()

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
  height: 100%;
  overflow-y: scroll;
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
