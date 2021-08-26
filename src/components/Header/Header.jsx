import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

export default function Header() {
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <YouTubeLogo
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />

          <ToolbarRight>
            <IconButton >
              <SearchIcon />
            </IconButton>

            <IconButton>
              <Avatar>C</Avatar>
            </IconButton>
          </ToolbarRight>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

const ToolbarRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #606060;
  height: 100%;

  IconButton {
    padding: 12px;
  }

  .MuiAvatar-root {
    width: 24px;
    height: 24px;
    font-size: 0.875rem;
    background-color: #ef6c00;
  }
`

const YouTubeLogo = styled.img`
  height: 20px;
  cursor: pointer;
`

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-regular {
    min-height: 48px;
    height: 48px;
  }

  .MuiToolbar-root {
    background-color: white;
  }

  .MuiToolbar-gutters {
    padding-right: 0;
  }
`
