import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { miniSidebarRows as footerColumns } from './sidebarData'

const MobileFooter = () => {
  const classes = useStyles()

  return (
    <BottomNavigation showLabels className={classes.root}>
      {footerIcons()}
    </BottomNavigation>
  )
}

export default MobileFooter

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '48px',
  },
})

export const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-wrapper {
    color: #030303;
  }
  .MuiBottomNavigationAction-label {
    font-size: 10px;
    opacity: 1 !important; // to override MiniSidebar opacity=0
    margin-top: 6px;
  }
`

export const footerIcons = (style = undefined) =>
  footerColumns.map(({ Icon, text }) => {
    return (
      <StyledBottomNavigationAction
        key={text}
        label={text}
        icon={<Icon />}
        style={style} // To add padding in MiniSidebar
      />
    )
  })
