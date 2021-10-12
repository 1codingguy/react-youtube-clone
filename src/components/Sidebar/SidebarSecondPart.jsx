import React, { useState } from 'react'
import styled from 'styled-components/macro'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { ShowMoreRow } from './ShowMoreRow'
import { ShowLessRow } from './ShowLessRow'
import { SubHeading, SidebarMenuItem } from './FullWidthSidebar'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

export const SidebarSecondPart = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandMenu = () => {
    setIsExpanded(true)
  }
  const collapseMenu = () => {
    setIsExpanded(false)
  }
  return (
    <>
      <SubHeading>SUBSCRIPTIONS</SubHeading>
      <SubscriptionItem />
      {isExpanded ? (
        <>
          {[...Array(5)].map((_, index) => {
            return <SubscriptionItem key={`subscriptions-${index}`} />
          })}
          <ShowLessRow onClick={collapseMenu} />
        </>
      ) : (
        <ShowMoreRow onClick={expandMenu} />
      )}
    </>
  )
}

const SubscriptionItem = () => {
  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)
  return (
    <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
      <StyledListItemAvatar>
        <StyledAvatar>C</StyledAvatar>
      </StyledListItemAvatar>
      <ListItemText primary="coding-guy" />
    </SidebarMenuItem>
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
