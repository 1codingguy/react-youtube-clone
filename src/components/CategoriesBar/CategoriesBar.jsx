import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'
import {
  HideOnScroll,
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT as MOBILE_CATEGORIES_BAR_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT as DESKTOP_CATEGORIES_BAR_HEIGHT,
} from '../utils/utils'
import { useGlobalContext } from '../../context'
import AppBar from '@material-ui/core/AppBar'

/** topbar under the search that shows category filter chips that scroll left/right */
const CategoriesBar = () => {
  const { marginLeftToOffset } = useGlobalContext()

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <HideOnScroll>
      <TestAppBar marginLeftToOffset={marginLeftToOffset}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
          <Tab label="Item Two" />
        </Tabs>
      </TestAppBar>
    </HideOnScroll>
  )
}

export default CategoriesBar

const TestAppBar = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
    height: ${MOBILE_CATEGORIES_BAR_HEIGHT}px;
  }
  height: ${DESKTOP_CATEGORIES_BAR_HEIGHT}px;
  width: auto;
  position: fixed;
  margin-left: ${(props) => props.marginLeftToOffset}px;
  background-color: salmon;
  /* overflow-x: scroll; */
  /* transition: none !important; */
`
