import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { StyledMenuItem } from '../utils/StyledMenuItem'
import { SidebarFirstPart } from './SidebarFirstPart'
import { SidebarSecondPart } from './SidebarSecondPart'
import { SidebarThirdPart } from './SidebarThirdPart'

const FullWidthSidebar = ({ setOpenSidebarDrawer }) => {
  const handleSidebarClose = () => {
    setOpenSidebarDrawer(false)
  }

  return (
    <StyledFullWidthSidebar>
      <SidebarFirstPart onClick={handleSidebarClose} />
      <Divider />
      <SidebarSecondPart onClick={handleSidebarClose} />
      <DividerWithMargin />
      <SidebarThirdPart onClick={handleSidebarClose} />
    </StyledFullWidthSidebar>
  )
}

export default FullWidthSidebar

const StyledFullWidthSidebar = styled.div`
  width: 240px;
  overflow-y: auto;
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
