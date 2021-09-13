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

import styled from 'styled-components'
import { StyledMenuItem, StyledListItemIcon } from '../../utils/StyledMenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export const menuArray = [
  { Icon: AccountBoxOutlinedIcon, text: 'Your channel' },
  { Icon: MonetizationOnOutlinedIcon, text: 'Purchase and memberships' },
  { Icon: SettingsOutlinedIcon, text: 'YouTube Studio' },
  { Icon: SupervisorAccountOutlinedIcon, text: 'Switch account', arrow: true },
  { Icon: ExitToAppOutlinedIcon, text: 'Sign out' },
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

export const AvatarMenuTop = ({ onClick }) => {
  return menuArray.slice(0, 5).map(({ Icon, text, arrow }) => {
    return <MenuRow key={text} {...{ Icon, text, arrow, onClick }} />
  })
}

export const AvatarMenuMiddle = ({ onClick }) => {
  return menuArray.slice(5).map(({ Icon, text, arrow }) => {
    return <MenuRow key={text} {...{ Icon, text, arrow, onClick }} />
  })
}

const MenuRow = ({ Icon, text, onClick, arrow }) => {
  return (
    <MenuItem onClick={onClick}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
      {arrow && <ChevronRightIcon style={{ fontSize: '20px' }} />}
    </MenuItem>
  )
}

const MenuItem = styled(StyledMenuItem)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`