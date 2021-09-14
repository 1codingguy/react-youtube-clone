import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import {
  IconTooltip,
  StyledIconButton,
  DEFAULT_FONT_SIZE,
} from '../../utils/utils'

export const SearchContainerWithTextField = () => {
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

export const StyledForm = styled.form`
  flex-grow: 1;
  margin-left: 40px;
  display: flex;
  max-width: 640px;
  border: 0.2px solid lightgray;
`

export const SearchBox = styled.input`
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

export const SearchIconContainer = styled.div`
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
