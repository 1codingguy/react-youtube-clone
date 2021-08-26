import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

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
// modified from example: https://material-ui.com/components/app-bar/
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: '48' })
  return (
    <Slide in={!trigger}>
      {/* previously added wrap a <div> around {children, the hide animation didn't work as a result} */}
      {children}
    </Slide>
  )
}

export default function Header() {
  return (
    <>
      <HideOnScroll>
        <StyledAppBar>
          <Toolbar>
            <YouTubeLogo
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo"
            />

            <ToolbarRight>
              <IconButton>
                <SearchIcon />
              </IconButton>

              <IconButton>
                <Avatar>C</Avatar>
              </IconButton>
            </ToolbarRight>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>

      <div>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </div>
    </>
  )
}
