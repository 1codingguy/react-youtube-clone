import React from 'react'
import styled from 'styled-components/macro'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import TextField from '@material-ui/core/TextField'
import {
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  DEFAULT_FONT_SIZE,
  handleSearchFormSubmit,
  useClearSearchTerm,
  TWO_COL_MIN_WIDTH,
} from '../../../utils/utils'
import { useAtom } from 'jotai'
import { searchTermAtom, searchResultsAtom } from '../../../store'
import { useHistory } from 'react-router'
import { DrawerSearchButton } from './DrawerSearchButton'
import { DrawerClearButton } from './DrawerClearButton'

const MobileViewSearchDrawer = ({
  isSearchDrawerOpen,
  setIsSearchDrawerOpen,
}) => {
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
    <Drawer
      anchor="top"
      open={isSearchDrawerOpen}
      onClose={() => setIsSearchDrawerOpen(false)}
      transitionDuration={0} // disable the transition animation
    >
      <DrawerToolbar disableGutters>
        <BackIcon onClick={() => setIsSearchDrawerOpen(false)} />

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
          {searchTerm && <DrawerClearButton {...{ setSearchTerm }} />}

          <DrawerSearchButton />
        </form>
      </DrawerToolbar>
    </Drawer>
  )
}

export default MobileViewSearchDrawer

const DrawerToolbar = styled(Toolbar)`
  && {
    min-height: ${MOBILE_VIEW_HEADER_HEIGHT}px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      min-height: ${DESKTOP_VIEW_HEADER_HEIGHT}px;
    }
  }
`

const BackIcon = styled(ArrowBackOutlinedIcon)`
  color: #606060;
  margin: 12px;
`

const MobileSearchField = styled(TextField)`
  .MuiInputBase-input {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`

export const MobileSearchIcon = styled(SearchOutlinedIcon)`
  color: #606060;
  /* margin: 8px; */
`
