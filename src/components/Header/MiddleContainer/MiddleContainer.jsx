import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import { SHOW_SEARCH_BOX_BREAKPOINT } from '../../utils/utils'
import MobileViewSearchDrawer from './MobileViewSearchDrawer'
import { SearchContainerWithTextField } from './SearchContainerWithTextField'
import { MicButton } from './MicButton'
import { SearchButton } from './SearchButton'
import { useGlobalContext } from '../../../context'

const MiddleContainer = () => {
  const { isMobileView } = useGlobalContext()

  const showSearchBox = useMediaQuery(
    `(min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}px)`
  )

  return (
    <StyledMiddleContainer>
      {showSearchBox ? (
        // only show search box with text field >= 657px
        <SearchContainerWithTextField />
      ) : (
        <>
          {/* only show search icon < 657px */}
          <SearchButton />
          <MobileViewSearchDrawer />
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
