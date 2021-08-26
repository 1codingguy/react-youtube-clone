import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'

const SHOW_SEARCH_BOX_WIDTH = '657px';

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-regular {
    min-height: 56px;
    height: 56px;
  }

  .MuiToolbar-root {
    background-color: white;
    /* remove the border later */
    border-bottom: 1px solid lightgray;
  }
`

const StyledBox = styled(Box)`
  color: #030303;
  padding: ${(props) => props.padding};
  height: 100%;
  display: flex;
  align-items: center;

  /* doesn't work if StyledIconButton = styled(IconButton) */
  .MuiIconButton-root {
    padding: 8px;
  }
`

const StyledBoxLeft = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
`

const StyledBoxCenter = styled(StyledBox)`
  flex-grow: 1;
  /* margin-right: 2rem; */
  justify-content: flex-end;

  @media screen and (min-width: ${SHOW_SEARCH_BOX_WIDTH}) {
    justify-content: center;
  }
`

const StyledBoxRight = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
  justify-content: space-between;

  /* doesn't work if StyledAvatar = styled(Avatar) */
  .MuiAvatar-root {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
    background-color: #ef6c00;
  }
`

const YouTubeLogo = styled.img`
  height: 20px;
  margin: auto 1rem;
  cursor: pointer;
`

const StyledForm = styled.form`
  flex-grow: 1;
  margin-left: 40px;
  display: flex;
  max-width: 640px;
  border: 0.2px solid lightgray;
`

const StyledInput = styled.input`
  border: none;
  padding: 1px 2px;
  padding-left: 12px;
  height: 30px;
  width: 100%;

  &::placeholder {
    font-family: $font-default;
    color: #909090;
    font-size: 1rem;
  }
`

const StyledSearchIconContainer = styled(Box)`
  width: 72px;
  height: 30px;
  /* background-color: red; */
  display: grid;
  place-items: center;
  flex-grow: 1;
  cursor: pointer;
  border-left: 0.2px solid lightgray;
  background-color: #f8f8f8;

  &:hover {
    background-color: #f0f0f0;
  }
`

const StyledIconButton = styled(IconButton)`
  height: 30px;
  padding: 1px 6px;
`

function DesktopHeader() {
  const showSearchBox = useMediaQuery({ minWidth: SHOW_SEARCH_BOX_WIDTH })

  return (
    <>
      <StyledAppBar elevation={0}>
        <Toolbar>

          <StyledBoxLeft padding={'8px'}>
            <MenuIcon />
            <YouTubeLogo
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo"
            />
          </StyledBoxLeft>

          <StyledBoxCenter>
            {showSearchBox ? (
              <StyledForm>
                <StyledInput placeholder="Search" />

                <StyledSearchIconContainer>
                  <StyledIconButton>
                    <SearchIcon />
                  </StyledIconButton>
                </StyledSearchIconContainer>
              </StyledForm>
            ) : (
              <IconButton>
                <SearchIcon />
              </IconButton>
            )}

            <IconButton>
              <MicIcon />
            </IconButton>
          </StyledBoxCenter>

          <StyledBoxRight>
            <IconButton>
              <VideoCallIcon />
            </IconButton>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneSharpIcon />
            </IconButton>
            <IconButton>
              <Avatar>C</Avatar>
            </IconButton>
          </StyledBoxRight>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default DesktopHeader
