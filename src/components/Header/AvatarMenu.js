import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
// settings
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined'
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined'

const AvatarMenu = ({ anchorEl, handleClose }) => {
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
        <ChevronRightIcon />
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
  .MuiTypography-body1 {
    font-size: 14px;
  }
`

const StyledAccountHeader = ({ handleClose }) => {
  return (
    <AccountHeader>
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
            style={{ paddingTop: '0', paddingBottom: '0', maxHeight: '40px' }}
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
            // style={{ paddingTop: '0', paddingBottom: '0' }}
          >
            <StyledListItem Icon={Icon} text={text} arrow={arrow} />
          </AvatarMenuItem>
        )
      })}
    </>
  )
}
