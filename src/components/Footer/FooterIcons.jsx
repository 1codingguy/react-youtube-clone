import React from 'react'
import styled from 'styled-components/macro'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { miniSidebarRows as footerColumns } from '../Sidebar/sidebarData'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'
import { Link } from 'react-router-dom'

export const FooterIcons = () => {
  return footerColumns.map(({ Icon, text }) => {
    if (text === 'Home') {
      return (
        <StyledBottomNavigationAction
          key={text}
          label={text}
          icon={<Icon />}
          component={Link}
          to="/"
        />
      )
    } else {
      return (
        <StyledBottomNavigationAction key={text} label={text} icon={<Icon />} />
      )
    }
  })
}

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-wrapper {
    color: #030303;
  }
  .MuiBottomNavigationAction-label {
    font-size: 11px;
    opacity: 1 !important; // to override MiniSidebar
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      margin-top: 6px;
    }
  }
`
