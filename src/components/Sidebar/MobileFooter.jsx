import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { miniSidebarRows as footerColumns } from '../Sidebar/sidebarData'

const MobileFooter = () => {
  const classes = useStyles()

  return (
    <BottomNavigation showLabels className={classes.root}>
      {footerColumns.map(({ Icon, text }) => {
        return <StyledBottomNavigationAction label={text} icon={<Icon />} />
      })}
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

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-wrapper {
    color: #030303;
  }
  .MuiBottomNavigationAction-label {
    font-size: 11px;
  }
`
