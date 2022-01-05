import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components/macro'
import {
  SHOW_SEARCH_BOX_BREAKPOINT,
  useIsMobileView,
  handleSearchFormSubmit as querySearchOnReload,
} from '../../../utils/utils'
import MobileViewSearchDrawer from './MobileViewSearchDrawer'
import { SearchContainerWithTextField } from './SearchContainerWithTextField'
import { MicButton } from './MicButton'
import { SearchButton } from './SearchButton'
import { useLocation, useHistory } from 'react-router'
import { useAtom } from 'jotai'
import { searchResultsAtom, searchTermAtom } from '../../../store'
import { MobileSearchTermContainer } from './MobileSearchTermContainer'

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

  const [, setSearchResults] = useAtom(searchResultsAtom)
  const [, setSearchTerm] = useAtom(searchTermAtom)
  const history = useHistory()

  // update searchResults and searchTerm if page is refresh, or if clicked on browser's forward and back button
  useEffect(() => {
    if (searchTermFromUrl) {
      querySearchOnReload(
        null, // event
        searchTermFromUrl,
        setSearchResults,
        history,
        true, // useLocalStorage
        false //pushHistory
      )
      // update the searchTerm so search box value displayed correct
      setSearchTerm(searchTermFromUrl)
    }
  }, [setSearchTerm, searchTermFromUrl, setSearchResults, history])

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

  if (isMobileView) {
    return (
      <StyledMiddleContainer>
        {isInSearchResultsPage ? (
          <MobileSearchTermContainer
            {...{ setIsSearchDrawerOpen, searchTermFromUrl }}
          />
        ) : (
          <SearchButton {...{ setIsSearchDrawerOpen }} />
        )}
        <MobileViewSearchDrawer
          {...{ isSearchDrawerOpen, setIsSearchDrawerOpen }}
        />
      </StyledMiddleContainer>
    )
  } else {
    return (
      <StyledMiddleContainer>
        {showSearchBox ? (
          // only show search box with text field >= 657px
          <SearchContainerWithTextField />
        ) : (
          <>
            <SearchButton {...{ setIsSearchDrawerOpen }} />
            <MobileViewSearchDrawer
              {...{ isSearchDrawerOpen, setIsSearchDrawerOpen }}
            />
          </>
        )}
        <MicButton />
      </StyledMiddleContainer>
    )
  }
}

export default MiddleContainer

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
