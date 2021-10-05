import React, { useEffect, useState } from 'react'
import { useMediaQuery, Typography } from '@material-ui/core'
import styled from 'styled-components'
import {
  SHOW_SEARCH_BOX_BREAKPOINT,
  StyledIconButton,
  useIsMobileView,
} from '../../utils/utils'
import MobileViewSearchDrawer from './MobileViewSearchDrawer'
import { SearchContainerWithTextField } from './SearchContainerWithTextField'
import { MicButton } from './MicButton'
import { SearchButton } from './SearchButton'
import { useLocation } from 'react-router'
import TuneIcon from '@material-ui/icons/Tune'

const MiddleContainer = () => {
  const isMobileView = useIsMobileView()

  const showSearchBox = useMediaQuery(
    `(min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}px)`
  )

  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false)

  const currentLocation = useLocation()
  const isInSearchResultsPage = currentLocation.pathname === '/results'
  // retrieve the search term appears in URL
  const searchTermFromUrl = new URLSearchParams(currentLocation.search).get(
    'search_query'
  )

  // reset isSearchDrawerOpen to false when >= 657px
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth >= SHOW_SEARCH_BOX_BREAKPOINT) {
        setIsSearchDrawerOpen(false)
      }
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  })

  return (
    <StyledMiddleContainer>
      {showSearchBox ? (
        // only show search box with text field >= 657px
        <SearchContainerWithTextField />
      ) : (
        <>
          {/* only show search icon < 657px */}
          {isInSearchResultsPage && isMobileView ? (
            <ResultsHeaderBar>
              {/* button with searchTerm that opens up the SearchDrawer */}
              <MobileHeaderSearchTermButton
                onClick={() => setIsSearchDrawerOpen(true)}
              >
                <MobileHeaderText
                  style={{ lineHeight: '48px', fontSize: '14px' }}
                >
                  {searchTermFromUrl}
                </MobileHeaderText>
              </MobileHeaderSearchTermButton>
              {/* IconButton */}
              <MobileHeaderFilterButton />
            </ResultsHeaderBar>
          ) : (
            <SearchButton {...{ setIsSearchDrawerOpen }} />
          )}

          <MobileViewSearchDrawer
            {...{ isSearchDrawerOpen, setIsSearchDrawerOpen }}
          />
        </>
      )}

      {/* only show mic icon in desktop view */}
      {isMobileView ? null : <MicButton />}
    </StyledMiddleContainer>
  )
}

export default MiddleContainer

const MobileHeaderText = styled(Typography)`
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

const MobileHeaderSearchTermButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  text-transform: inherit;
  color: inherit;
  background: transparent;
  flex-grow: 1;
`

const MobileHeaderFilterButton = () => {
  return (
    <StyledIconButton>
      <TuneIcon />
    </StyledIconButton>
  )
}

const ResultsHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 4px;
  height: 32px;
  flex-grow: 1;
`

const StyledMiddleContainer = styled.div`
  color: #030303;
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;

  @media screen and (min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}px) {
    justify-content: center;
    margin-right: 2rem;
  }
`
