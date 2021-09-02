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
import { StyledListItem, StyledMenuItem } from './StyledMenuItem'

// Icons for menu
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined'
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined'
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

import Fab from '@material-ui/core/Fab'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import YouTubeIcon from '@material-ui/icons/YouTube'

const firstMobileMenuItems = [
  { Icon: AccountBoxOutlinedIcon, text: 'Your channel' },
  { Icon: YouTubeIcon, text: 'Get YouTube Premium' },
  { Icon: MonetizationOnOutlinedIcon, text: 'Purchase and memberships' },
  { Icon: SupervisorAccountOutlinedIcon, text: 'Switch account' },
]
const secondMobileMenuItems = [
  { Icon: SettingsOutlinedIcon, text: 'Settings' },
  { Icon: SecurityOutlinedIcon, text: 'Your data in YouTube' },
  { Icon: FeedbackOutlinedIcon, text: 'Feedback' },
  { Icon: HelpOutlineOutlinedIcon, text: 'Help' },
]

const MobileAccountHeader = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  min-height: 52px;
`

const AvatarMenu = ({ anchorEl, handleClose, isMobileView }) => {
  if (isMobileView) {
    return (
      <MobileAvatarMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MobileAccountHeader square={true}>
          <CloseOutlinedIcon
            onClick={handleClose}
            style={{ cursor: 'pointer', margin: '8px', marginRight: '32px' }}
          />
          <Typography>Account</Typography>
        </MobileAccountHeader>

        <StyledAccountHeader
          isMobileView={isMobileView}
          handleClose={handleClose}
        />

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

        <Divider />
        <FirstMobileMenu handleClose={handleClose} />
        <Divider />
        <SecondMobileMenu handleClose={handleClose} />
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
      <StyledAccountHeader handleClose={handleClose} />
      <Divider />
      <FirstMenu handleClose={handleClose} />
      <Divider />
      <SecondMenu handleClose={handleClose} />
      <Divider />

      <AvatarMenuItem onClick={handleClose}>
        <ListItemText>Restricted Mode: Off</ListItemText>
        <ChevronRightIcon style={{ fontSize: '20px' }} />
      </AvatarMenuItem>
    </StyledAvatarMenu>
  )
}

export default AvatarMenu

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

const AccountHeader = styled.div`
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

const AvatarMenuItem = styled(StyledMenuItem)`
  .MuiMenuItem-root {
    /* Overriding min-height here has no effect */
    min-height: 40px;
  }

  .MuiTypography-body1 {
    font-size: 14px;
  }
`

const StyledAccountHeader = ({ handleClose, isMobileView }) => {
  return (
    <AccountHeader style={isMobileView && { padding: '8px' }}>
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
    </AccountHeader>
  )
}

const firstMenuItems = [
  { Icon: AccountBoxOutlinedIcon, text: 'Create a channel' },
  { Icon: MonetizationOnOutlinedIcon, text: 'Purchase and memberships' },
  { Icon: SettingsOutlinedIcon, text: 'YouTube Studio' },
  { Icon: SupervisorAccountOutlinedIcon, text: 'Switch account', arrow: true },
  { Icon: ExitToAppOutlinedIcon, text: 'Sign out' },
]

const secondMenuItems = [
  {
    Icon: Brightness2OutlinedIcon,
    text: 'Appearance: Device theme',
    arrow: true,
  },
  { Icon: TranslateOutlinedIcon, text: 'Language: English', arrow: true },
  { Icon: LanguageOutlinedIcon, text: 'Location: United Kingdom', arrow: true },
  { Icon: SettingsOutlinedIcon, text: 'Settings' },
  { Icon: SecurityOutlinedIcon, text: 'Your data in YouTube' },
  { Icon: HelpOutlineOutlinedIcon, text: 'Help' },
  { Icon: FeedbackOutlinedIcon, text: 'Send feedback' },
  { Icon: KeyboardOutlinedIcon, text: 'Keyboard shortcuts' },
]

const FirstMenu = ({ handleClose }) => {
  return (
    <>
      {firstMenuItems.map(({ Icon, text, arrow }) => {
        return (
          <AvatarMenuItem
            onClick={handleClose}
            key={text}
            // maxHeight: '40px'
            style={{ paddingTop: '0', paddingBottom: '0' }}
          >
            <StyledListItem Icon={Icon} text={text} arrow={arrow} />
          </AvatarMenuItem>
        )
      })}
    </>
  )
}

const SecondMenu = ({ handleClose }) => {
  return (
    <>
      {secondMenuItems.map(({ Icon, text, arrow }) => {
        return (
          <AvatarMenuItem
            onClick={handleClose}
            key={text}
            // maxHeight: '40px'
            style={{ paddingTop: '0', paddingBottom: '0' }}
          >
            <StyledListItem Icon={Icon} text={text} arrow={arrow} />
          </AvatarMenuItem>
        )
      })}
    </>
  )
}

const FirstMobileMenu = ({ handleClose }) => {
  return (
    <>
      {firstMobileMenuItems.map(({ Icon, text }) => {
        return (
          <StyledMenuItem onClick={handleClose} key={text}>
            <StyledListItem
              Icon={Icon}
              text={text}
              fontSize={'24px'}
              iconStyle={{ marginRight: '32px' }}
            />
          </StyledMenuItem>
        )
      })}
    </>
  )
}

const SecondMobileMenu = ({ handleClose }) => {
  return (
    <>
      {secondMobileMenuItems.map(({ Icon, text }) => {
        return (
          <StyledMenuItem onClick={handleClose} key={text}>
            <StyledListItem
              Icon={Icon}
              text={text}
              fontSize={'24px'}
              iconStyle={{ marginRight: '32px' }}
            />
          </StyledMenuItem>
        )
      })}
    </>
  )
}
