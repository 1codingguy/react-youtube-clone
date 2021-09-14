import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined'
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined'
import YouTubeIcon from '@material-ui/icons/YouTube'
import styled from 'styled-components'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledMenuItem, StyledListItemIcon } from '../../utils/utils'
import { useGlobalContext } from '../../../context'

export const MobileAvatarMenuTop = () => {
  return mobileMenuArray.slice(0, 4).map(({ Icon, text }) => {
    return <MobileMenuRow key={text} {...{ Icon, text }} />
  })
}

export const MobileAvatarMenuBottom = () => {
  return mobileMenuArray.slice(4).map(({ Icon, text }) => {
    return <MobileMenuRow key={text} {...{ Icon, text }} />
  })
}

const MobileMenuRow = ({ Icon, text }) => {
  const { handleRightContainerMenusClose } = useGlobalContext()

  return (
    <StyledMenuItem onClick={handleRightContainerMenusClose}>
      <RowIcon>
        <Icon fontSize="medium" />
      </RowIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  )
}

const RowIcon = styled(StyledListItemIcon)`
  && {
    margin-right: 32px;
  }
`

const mobileMenuArray = [
  { Icon: AccountBoxOutlinedIcon, text: 'Your channel' },
  { Icon: YouTubeIcon, text: 'Get YouTube Premium' },
  { Icon: MonetizationOnOutlinedIcon, text: 'Purchase and memberships' },
  { Icon: SupervisorAccountOutlinedIcon, text: 'Switch account' },
  { Icon: SettingsOutlinedIcon, text: 'Settings' },
  { Icon: SecurityOutlinedIcon, text: 'Your data in YouTube' },
  { Icon: FeedbackOutlinedIcon, text: 'Feedback' },
  { Icon: HelpOutlineOutlinedIcon, text: 'Help' },
]
