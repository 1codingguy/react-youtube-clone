import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import { StyledAppBar } from '../Header/Header'

/** topbar under the search that shows category filter chips that scroll left/right */
const CategoriesBar = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <StyledAppBar style={{ marginTop: '56px' }}>
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
      </Tabs>
    </StyledAppBar>
  )
}

export default CategoriesBar
