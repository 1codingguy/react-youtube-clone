import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

// custom component and utils
import { MOBILE_VIEW_BREAKPOINT } from '../sharedComponents/sharedComponents'
import { StyledMenuItem, addMenuChunk } from './StyledMenuItem'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import Fab from '@material-ui/core/Fab'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import { desktopMenuArray, mobileMenuArray } from './AvatarMenuData'

const AvatarMenu = ({ anchorEl, handleClose, isMobileView }) => {
  const addDesktopMenuChunk = addMenuChunk(
    desktopMenuArray,
    AvatarMenuItem,
    handleClose,
    { paddingTop: '0', paddingBottom: '0' }
  )

  const addMobileMenuChunk = addMenuChunk(
    mobileMenuArray,
    StyledMenuItem,
    handleClose,
    undefined,
    '24px',
    { marginRight: '32px' }
  )
  // console.log(desktopMenuChunk)
  // console.log(mobileMenuChunk)

  if (isMobileView) {
    return (
      <MobileAvatarMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMobileAccountHeader handleClose={handleClose} />

        <StyledAccountInfoHeader
          isMobileView={isMobileView}
          handleClose={handleClose}
        />

        <StyledFab handleClose={handleClose} />
        <Divider />
        {addMobileMenuChunk(0, 4)}
        <Divider />
        {addMobileMenuChunk(4)}
      </MobileAvatarMenu>
    )
  }
  return (
    <StyledAvatarMenu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <StyledAccountInfoHeader handleClose={handleClose} />
      <Divider />
      {addDesktopMenuChunk(0, 5)}
      <Divider />
      {addDesktopMenuChunk(5)}
      <Divider />

      <AvatarMenuItem onClick={handleClose}>
        <ListItemText>Restricted Mode: Off</ListItemText>
        <ChevronRightIcon style={{ fontSize: '20px' }} />
      </AvatarMenuItem>
    </StyledAvatarMenu>
  )
}

export default AvatarMenu

const StyledFab = ({ handleClose }) => (
  <Fab
    style={{
      position: 'fixed',
      top: '142px',
      right: '20px',
      backgroundColor: '#FF0000',
      color: 'white',
    }}
    onClick={handleClose}
  >
    <ArrowUpwardOutlinedIcon style={{ fontSize: '20px' }} />
  </Fab>
)

const StyledMobileAccountHeader = ({ handleClose }) => (
  <MobileAccountHeader square={true}>
    <CloseOutlinedIcon
      onClick={handleClose}
      style={{ cursor: 'pointer', margin: '8px', marginRight: '32px' }}
    />
    <Typography>Account</Typography>
  </MobileAccountHeader>
)

const StyledAvatarMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    borderTop: 0,
    borderRadius: 0,
    // change to max-weight and max-height when finished
    width: '300px',
    maxHeight: '100%',
    opacity: 0.5,
  },
})((props) => (
  <Popover
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const MobileAvatarMenu = withStyles({
  paper: {
    minWidth: '100vw',
    minHeight: '100vh',
    top: `0px !important`,
    left: `0px !important`,
  },
})((props) => (
  <Popover
    anchorReference="anchorPosition"
    anchorPosition={{ top: 0, left: 0 }}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))

const AccountInfoHeader = styled.div`
  display: flex;
  padding: 16px;

  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
    padding: 0;
    margin: 12px auto;
  }

  .MuiAvatar-root {
    background-color: #ef6c00;
    margin-right: 16px;

    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}) {
      width: 48px;
      height: 48px;
    }
  }
`

const MobileAccountHeader = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  min-height: 52px;
`

const AvatarMenuItem = styled(StyledMenuItem)`
  .MuiMenuItem-root {
    /* Overriding min-height here has no effect */
    min-height: 40px;
  }

  .MuiTypography-body1 {
    font-size: 14px;
  }
`

const StyledAccountInfoHeader = ({ handleClose, isMobileView }) => {
  return (
    <AccountInfoHeader style={isMobileView && { padding: '8px' }}>
      <Avatar>c</Avatar>
      <Box>
        <Box>
          <Typography style={{ fontSize: '16px', fontWeight: '600' }}>
            coding guy
          </Typography>
        </Box>
        <Typography style={{ fontSize: '14px' }}>
          1codingguy@gmail.com
        </Typography>

        <Typography
          onClick={handleClose}
          style={{
            fontSize: '14px',
            marginTop: '8px',
            color: '#2C77DB',
            cursor: 'pointer',
          }}
        >
          Manage your Google Account
        </Typography>
      </Box>
    </AccountInfoHeader>
  )
}
