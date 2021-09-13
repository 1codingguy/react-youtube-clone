import React from 'react'
import styled from 'styled-components'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ShowMoreRow } from './sidebarData'
import { SubHeading, SidebarMenuItem } from './FullWidthSidebar'

export const SidebarSecondPart = ({ onClick }) => {
  return (
    <>
      <SubHeading>SUBSCRIPTIONS</SubHeading>

      <SidebarMenuItem onClick={onClick}>
        <StyledListItemAvatar>
          <StyledAvatar>C</StyledAvatar>
        </StyledListItemAvatar>
        <ListItemText primary="coding-guy" />
      </SidebarMenuItem>

      <ShowMoreRow onClick={onClick} />
    </>
  )
}
const StyledListItemAvatar = styled(ListItemAvatar)`
  && {
    min-width: 0;
    margin-right: 24px;
  }
`
const StyledAvatar = styled(Avatar)`
  && {
    width: 24px;
    height: 24px;
    font-size: 0.75rem;
    background-color: #ef6c00;
  }
`
