import React, { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import TextField from '@material-ui/core/TextField'

import {
  IconTooltip,
  StyledIconButton,
  SHOW_SEARCH_BOX_BREAKPOINT,
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  DEFAULT_FONT_SIZE,
} from '../utils/utils'
import useResetOpenSearchDrawer from '../utils/useResetOpenSearchDrawer'

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
        <SearchContainer />
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

// ------------------------
// Mobile view components

const MobileViewSearchDrawer = ({
  openSearchDrawer,
  handleCloseSearchDrawer,
}) => {
  return (
    <Drawer
      anchor="top"
      open={openSearchDrawer}
      onClose={handleCloseSearchDrawer}
      transitionDuration={0} // disable the transition animation
    >
      <MobileToolbar disableGutters>
        <MobileBackIcon onClick={handleCloseSearchDrawer} />
        <MobileSearchField placeholder="Search YouTube" />
        <MobileSearchIcon onClick={handleCloseSearchDrawer} />
      </MobileToolbar>
    </Drawer>
  )
}

const MicButton = () => {
  return (
    <IconTooltip title="Search with your voice">
      <StyledIconButton>
        <MicIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}

const MobileToolbar = styled(Toolbar)`
  && {
    @media screen and (max-width) {
      min-height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
    }
    min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
  }
`
const MobileBackIcon = styled(ArrowBackOutlinedIcon)`
  color: #606060;
  margin: 12px;
`

const MobileSearchField = styled(TextField)`
  flex-grow: 1;

  .MuiInputBase-input {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`

const MobileSearchIcon = styled(SearchOutlinedIcon)`
  color: #606060;
  margin: 8px;
`

// ------------------------
// Desktop view components

const SearchContainer = () => {
  return (
    <StyledForm>
      <SearchBox placeholder="Search" />
      <IconTooltip title="Search">
        <SearchIconContainer>
          <StyledIconButton style={{ height: '30px', width: '30px' }}>
            <SearchIcon />
          </StyledIconButton>
        </SearchIconContainer>
      </IconTooltip>
    </StyledForm>
  )
}

const SearchButton = ({ setOpenSearchDrawer }) => {
  return (
    <IconTooltip title="Search">
      <StyledIconButton onClick={() => setOpenSearchDrawer(true)}>
        <SearchIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}

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
const StyledForm = styled.form`
  flex-grow: 1;
  margin-left: 40px;
  display: flex;
  max-width: 640px;
  border: 0.2px solid lightgray;
`

const SearchBox = styled.input`
  border: none;
  padding: 1px 2px;
  padding-left: 12px;
  height: 30px;
  width: 100%;

  &::placeholder {
    font-family: $font-default;
    color: #909090;
    font-size: ${DEFAULT_FONT_SIZE}px;
  }

  &::-webkit-input-placeholder {
    /* not sure if it will solve the Safari vertical alignment issue */
    line-height: revert;
  }
`

const SearchIconContainer = styled.div`
  width: 72px;
  height: 30px;
  /* background-color: red; */
  display: grid;
  place-items: center;
  flex-grow: 1;
  cursor: pointer;
  border-left: 0.2px solid lightgray;
  background-color: #f8f8f8;

  &:hover {
    background-color: #f0f0f0;
  }
`