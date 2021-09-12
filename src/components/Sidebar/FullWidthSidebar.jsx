import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import { StyledMenuItem, addMenuChunk } from '../Header/StyledMenuItem'
import { sideBarMenuRows, moreFromYouTubeRows } from './sidebarData'

// example of turning a chunk into a mini component
function TopMenu({topMenuData}) {
  return (
    <div className="sidebar-top-menu" style={{ padding: '12px 0' }}>
      {topMenuData(0, 3)}
      <Divider style={{ margin: '12px 0' }} />
      {topMenuData(3)}
    </div>
  )
}


const FullWidthSidebar = ({ setOpenSidebarDrawer }) => {
  const handleSidebarClose = () => {
    setOpenSidebarDrawer(false)
  }

  const topMenuData = addMenuChunk(
    sideBarMenuRows,
    SidebarMenuItem,
    handleSidebarClose,
    undefined,
    'medium',
    { color: '#030303', marginRight: '24px' }
  )

  const bottomMenuData = addMenuChunk(
    moreFromYouTubeRows,
    SidebarMenuItem,
    handleSidebarClose,
    undefined,
    'medium',
    { color: '#030303', marginRight: '24px' }
  )

  return (
    <StyledFullWidthSidebar>
      <TopMenu {...{topMenuData}}/>

      <Divider />

      <div className="sidebar-subscriptions">
        <SubHeading>SUBSCRIPTIONS</SubHeading>

        <SidebarMenuItem>
          <ListItemAvatar
            style={{ minWidth: '0', marginRight: '24px' }}
            onClick={handleSidebarClose}
          >
            <Avatar
              style={{
                width: '24px',
                height: '24px',
                fontSize: '0.75rem',
                backgroundColor: '#ef6c00 ',
              }}
            >
              C
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="coding-guy" />
        </SidebarMenuItem>

        {topMenuData(-1)}
      </div>

      <Divider style={{ margin: '12px 0' }} />

      <div className="sidebar-bottom-menu">
        <SubHeading>MORE FROM YOUTUBE</SubHeading>
        {bottomMenuData(0, 4)}
        <Divider style={{ margin: '12px 0' }} />
        {bottomMenuData(4)}
        <Divider style={{ margin: '12px 0' }} />
      </div>
    </StyledFullWidthSidebar>
  )
}

export default FullWidthSidebar

const StyledFullWidthSidebar = styled.div`
  width: 240px;
  overflow-y: auto;
`

const SidebarMenuItem = styled(StyledMenuItem)`
  padding: 0 24px !important;

  .MuiTypography-body1 {
    font-size: 14px;
    color: #030303;
  }
`

const SubHeading = styled(Typography)`
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 8px 24px;
  color: #606060;
`
