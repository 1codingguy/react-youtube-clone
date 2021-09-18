import React from 'react'
import styled from 'styled-components'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { miniSidebarRows as footerColumns } from '../Sidebar/sidebarData'

export const FooterIcons = () => {
  return footerColumns.map(({ Icon, text }) => {
    return (
      <StyledBottomNavigationAction key={text} label={text} icon={<Icon />} />
    )
  })
}

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-wrapper {
    color: #030303;
  }
  .MuiBottomNavigationAction-label {
    font-size: 10px;
    opacity: 1 !important; // to override MiniSidebar opacity=0
    margin-top: 6px;
  }
`
