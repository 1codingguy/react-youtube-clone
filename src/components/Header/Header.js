import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

import { styled as muiStyled, makeStyles } from '@material-ui/core/styles'

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />

          <div className={classes.toolbarRight}>
            <IconButton>
              <SearchIcon />
            </IconButton>

            <StyledIconButton>
              <Avatar className={classes.avatar}>C</Avatar>
            </StyledIconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

const StyledIconButton = muiStyled(IconButton)({
  padding: '12px',
})


const useStyles = makeStyles({
  toolbarRight: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#606060',
    height: '100%',
  },
  avatar: {
    width: '24px',
    height: '24px',
    fontSize: '0.875rem',
    backgroundColor: '#ef6c00',
  },
  logo: {
    height: '20px',
    cursor: 'pointer',
  },
  toolbar : {
    minHeight: '48px',
    height: '48px',
    backgroundColor: 'white',
    paddingRight: 0
  }
})

