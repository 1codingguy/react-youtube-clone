import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import { SHOW_SEARCH_BOX_BREAKPOINT, useIsMobileView } from '../../utils/utils'
import MobileViewSearchDrawer from './MobileViewSearchDrawer'
import { SearchContainerWithTextField } from './SearchContainerWithTextField'
import { MicButton } from './MicButton'
import { SearchButton } from './SearchButton'

const MiddleContainer = () => {
  const isMobileView = useIsMobileView()

  const showSearchBox = useMediaQuery(
    `(min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}px)`
  )

  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false)

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
          <SearchButton {...{ setIsSearchDrawerOpen }} />
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
