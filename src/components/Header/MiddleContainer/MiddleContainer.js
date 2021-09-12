import React, { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'

import {
  SHOW_SEARCH_BOX_BREAKPOINT,
  MOBILE_VIEW_BREAKPOINT,
  
} from '../../utils/utils'
import useResetOpenSearchDrawer from '../../utils/useResetOpenSearchDrawer'
import MobileViewSearchDrawer from './MobileViewSearchDrawer'
import { SearchContainerWithTextField } from './SearchContainerWithTextField'
import { MicButton } from './MicButton'
import { SearchButton } from './SearchButton'

const MiddleContainer = () => {
  const isMobileView = useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)
  const showSearchBox = useMediaQuery(
    `(min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}px)`
  )
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false)
  const handleCloseSearchDrawer = () => {
    setOpenSearchDrawer(false)
  }
  // reset openSearchDrawer to false when >= 657px
  useResetOpenSearchDrawer(setOpenSearchDrawer)

  return (
    <StyledMiddleContainer>
      {showSearchBox ? (
        // only show search box with text field >= 657px
        <SearchContainerWithTextField />
      ) : (
        <>
          {/* only show search icon < 657px */}
          <SearchButton setOpenSearchDrawer={setOpenSearchDrawer} />

          <MobileViewSearchDrawer
            openSearchDrawer={openSearchDrawer}
            handleCloseSearchDrawer={handleCloseSearchDrawer}
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