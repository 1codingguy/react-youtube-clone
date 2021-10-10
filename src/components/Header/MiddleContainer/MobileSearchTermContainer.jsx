import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { MobileHeaderFilterButton as FilterButton } from './MobileHeaderFilterButton'

export const MobileSearchTermContainer = ({
  setIsSearchDrawerOpen,
  searchTerm,
}) => {
  return (
    <OuterContainer>
      {/* button with searchTerm that opens up the SearchDrawer */}
      <SearchTermContainer onClick={() => setIsSearchDrawerOpen(true)}>
        <SearchTermText style={{ lineHeight: '48px', fontSize: '14px' }}>
          {searchTerm}
        </SearchTermText>
      </SearchTermContainer>
      <FilterButton />
    </OuterContainer>
  )
}
const SearchTermText = styled(Typography)`
  transform: translateY(-16%);
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #030303;
  padding-left: 12px;
  height: 48px;
  line-height: 48px;
  text-align: initial;
`
const SearchTermContainer = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  text-transform: inherit;
  color: inherit;
  background: transparent;
  flex-grow: 1;
`
const OuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 4px;
  height: 32px;
  flex-grow: 1;
`
