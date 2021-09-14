import React from 'react'
import styled from 'styled-components'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledMenuItem, StyledListItemIcon } from '../../utils/utils'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import { useGlobalContext } from '../../../context'

export const AppsMenuTop = () => {
  return menuItems.slice(0, 1).map(({ Icon, text }) => {
    return <AppsMenuRow key={text} {...{ Icon, text }} />
  })
}

export const AppsMenuMiddle = () => {
  return menuItems.slice(1, 3).map(({ Icon, text }) => {
    return <AppsMenuRow key={text} {...{ Icon, text }} />
  })
}

export const AppsMenuBottom = () => {
  return menuItems.slice(3).map(({ Icon, text }) => {
    return <AppsMenuRow key={text} {...{ Icon, text }} />
  })
}

const AppsMenuRow = ({ Icon, text }) => {
  const { handleRightContainerMenusClose } = useGlobalContext()

  return (
    <StyledMenuItem onClick={handleRightContainerMenusClose}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  )
}

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`

const YouTubeMusicLogo = styled(PlayCircleOutlineIcon)`
  color: red;
`

const YouTubeKidsLogo = () => {
  // How to create a component and style it at the same time using styled-components instead of doing inline styling like below?
  return (
    <img
      style={{ height: '20px' }}
      src="https://upload.wikimedia.org/wikipedia/commons/4/48/YT_kids.png"
      alt="YouTube Kids Logo"
    />
  )
}

const menuItems = [
  { Icon: RedYouTubeIcon, text: 'YouTube TV' },
  { Icon: YouTubeMusicLogo, text: 'YouTube Music' },
  { Icon: YouTubeKidsLogo, text: 'YouTube Kids' },
  { Icon: RedYouTubeIcon, text: 'Creator Academy' },
  { Icon: RedYouTubeIcon, text: 'YouTube for Artists' },
]
