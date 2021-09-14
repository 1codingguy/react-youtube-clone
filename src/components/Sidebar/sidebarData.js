import HomeIcon from '@material-ui/icons/Home'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined'
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined'
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined'
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined'
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import YouTubeIcon from '@material-ui/icons/YouTube'
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined'
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna'
import SportsHandballOutlinedIcon from '@material-ui/icons/SportsHandballOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined'

import { SidebarMenuItem } from './FullWidthSidebar'
import { StyledListItemIcon } from '../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'

import { useGlobalContext } from '../../context'

export const MoreFromYouTubeSection1 = () => {
  return moreFromYouTubeRows.slice(0, 4).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />
  })
}
export const MoreFromYouTubeSection2 = () => {
  return moreFromYouTubeRows.slice(4).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />
  })
}
export const SidebarTopMenuSection1 = () => {
  return sideBarMenuRows.slice(0, 3).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />
  })
}
export const SidebarTopMenuSection2 = () => {
  return sideBarMenuRows.slice(3).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />
  })
}
export const ShowMoreRow = () => {
  const { Icon, text } = sideBarMenuRows.at(-1)
  return <SidebarRow {...{ Icon, text }} />
}

const SidebarRow = ({ Icon, text }) => {
  const { setOpenSidebarDrawer } = useGlobalContext()

  return (
    <SidebarMenuItem onClick={() => setOpenSidebarDrawer(false)}>
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </SidebarMenuItem>
  )
}

const sideBarMenuRows = [
  { Icon: HomeIcon, text: 'Home' },
  { Icon: ExploreOutlinedIcon, text: 'Explore' },
  { Icon: SubscriptionsOutlinedIcon, text: 'Subscriptions' },
  { Icon: VideoLibraryOutlinedIcon, text: 'Library' },
  { Icon: HistoryOutlinedIcon, text: 'History' },
  { Icon: ShopOutlinedIcon, text: 'Your videos' },
  { Icon: QueryBuilderOutlinedIcon, text: 'Watch later' },
  { Icon: PlaylistPlayOutlinedIcon, text: 'Music' },
  { Icon: ExpandMoreOutlinedIcon, text: 'Show more' },
]

const moreFromYouTubeRows = [
  { Icon: YouTubeIcon, text: 'YouTube Premium' },
  { Icon: VideogameAssetOutlinedIcon, text: 'Gaming' },
  { Icon: SettingsInputAntennaIcon, text: 'Live' },
  { Icon: SportsHandballOutlinedIcon, text: 'Sport' },
  { Icon: SettingsOutlinedIcon, text: 'Settings' },
  { Icon: FlagOutlinedIcon, text: 'Report history' },
  { Icon: HelpOutlineOutlinedIcon, text: 'Help' },
  { Icon: FeedbackOutlinedIcon, text: 'Send feedback' },
]

// mobile footer uses the same array
export const miniSidebarRows = [
  { Icon: HomeIcon, text: 'Home' },
  { Icon: ExploreOutlinedIcon, text: 'Explore' },
  { Icon: SubscriptionsOutlinedIcon, text: 'Subscriptions' },
  { Icon: VideoLibraryOutlinedIcon, text: 'Library' },
]
