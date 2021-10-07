import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import TextField from '@material-ui/core/TextField'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  DEFAULT_FONT_SIZE,
  StyledIconButton,
  handleSearchFormSubmit,
  useClearSearchTerm,
} from '../../utils/utils'
import ClearIcon from '@material-ui/icons/Clear'
import { useAtom } from 'jotai'
import {
  searchTermAtom,
  searchTermNextPageTokenAtom,
  searchTermTotalResultsAtom,
  searchResultsAtom,
} from '../../../store'
import { useHistory } from 'react-router'

const MobileViewSearchDrawer = ({
  isSearchDrawerOpen,
  setIsSearchDrawerOpen,
}) => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom)
  const [, setSearchTermNextPageToken] = useAtom(searchTermNextPageTokenAtom)
  const [, setSearchTermTotalResults] = useAtom(searchTermTotalResultsAtom)
  const [, setSearchResults] = useAtom(searchResultsAtom)
  const history = useHistory()

  const handleSubmit = (event) => {
    handleSearchFormSubmit(
      event,
      searchTerm,
      setSearchTermNextPageToken,
      setSearchTermTotalResults,
      setSearchResults,
      history,
      true, //useLocalData
      true, //shouldQueryAndStore
    )
  }

  // reset searchTerm when click on Home button and goes to landing page
  useClearSearchTerm(history, setSearchTerm)

  return (
    <Drawer
      anchor="top"
      open={isSearchDrawerOpen}
      onClose={() => setIsSearchDrawerOpen(false)}
      transitionDuration={0} // disable the transition animation
    >
      <MobileToolbar disableGutters>
        <MobileBackIcon onClick={() => setIsSearchDrawerOpen(false)} />

        <form
          style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          onSubmit={(e) => {
            setIsSearchDrawerOpen(false)
            handleSubmit(e)
          }}
        >
          <MobileSearchField
            fullWidth
            placeholder="Search YouTube"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* add a clear icon to clear the searchTerm if searchTerm is not empty*/}
          {searchTerm && (
            <StyledIconButton
              style={{ padding: '8px' }}
              onClick={() => setSearchTerm('')}
            >
              <ClearIcon />
            </StyledIconButton>
          )}
          <StyledIconButton type="submit" style={{ padding: '8px' }}>
            <MobileSearchIcon />
          </StyledIconButton>
        </form>
      </MobileToolbar>
    </Drawer>
  )
}

export default MobileViewSearchDrawer

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
  .MuiInputBase-input {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`

const MobileSearchIcon = styled(SearchOutlinedIcon)`
  color: #606060;
  /* margin: 8px; */
`
