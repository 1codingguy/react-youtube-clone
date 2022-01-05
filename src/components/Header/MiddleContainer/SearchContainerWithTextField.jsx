import React from 'react'
import styled from 'styled-components/macro'
import SearchIcon from '@material-ui/icons/Search'
import {
  IconTooltip,
  StyledIconButton,
  handleSearchFormSubmit,
  useClearSearchTerm,
} from '../../../utils/utils'
import { useAtom } from 'jotai'
import { searchTermAtom, searchResultsAtom } from '../../../store'
import { useHistory } from 'react-router'

export const SearchContainerWithTextField = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom)
  const [, setSearchResults] = useAtom(searchResultsAtom)
  const history = useHistory()

  const handleSubmit = (event) => {
    handleSearchFormSubmit(
      event,
      searchTerm,
      setSearchResults,
      history,
      true //useLocalData
    )
  }

  // reset searchTerm when click on Home button and goes to landing page
  useClearSearchTerm(history, setSearchTerm)

  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <SearchBox
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconTooltip title="Search">
        <SearchIconContainer>
          <StyledIconButton type="submit">
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
  margin-right: 4px;
  display: flex;
  max-width: 640px;
  border: 0.2px solid lightgray;
`

export const SearchBox = styled.input`
  border: none;
  padding: 1px 2px;
  padding-left: 12px;
  height: 40px;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    font-family: $font-default;
    color: #909090;
    font-size: 16px;
  }

  &::-webkit-input-placeholder {
    /* not sure if it will solve the Safari vertical alignment issue */
    line-height: revert;
  }
`

export const SearchIconContainer = styled.div`
  width: 72px;
  height: 40px;
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
