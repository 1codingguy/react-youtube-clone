import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import FocusableIcon from './FocusableIcon'

import {
  IconTooltip,
  StyledBox,
  SHOW_SEARCH_BOX_BREAKPOINT,
} from '../sharedComponents/sharedComponents'

const MiddleContainer = ({ isMobileView }) => {
  const showSearchBox = useMediaQuery({ minWidth: SHOW_SEARCH_BOX_BREAKPOINT })

  return (
    <StyledMiddleContainer>
      {/* only show search box above SHOW_SEARCH_BOX_BREAKPOINT */}
      {showSearchBox ? (
        <StyledForm>
          <SearchBox placeholder="Search" />
          <IconTooltip title="Search">
            <SearchIconContainer>
              <StyledIconButton>
                <SearchIcon />
              </StyledIconButton>
            </SearchIconContainer>
          </IconTooltip>
        </StyledForm>
      ) : (
        <FocusableIcon tooltipTitle="Search" Icon={SearchIcon} />
      )}

      {/* Hide mic icon in mobile view */}
      {isMobileView || (
        <FocusableIcon tooltipTitle="Search with your voice" Icon={MicIcon} />
      )}
    </StyledMiddleContainer>
  )
}

export default MiddleContainer

const StyledMiddleContainer = styled(StyledBox)`
  flex-grow: 1;
  justify-content: flex-end;

  @media screen and (min-width: ${SHOW_SEARCH_BOX_BREAKPOINT}) {
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
    font-size: 1rem;
  }
`

const SearchIconContainer = styled(Box)`
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

const StyledIconButton = styled(IconButton)`
  height: 30px;
  padding: 1px 6px;

  /* This is to target .MuiIconButton-root:hover{}
            & :hover {
              background-color: none;
            } */
`
