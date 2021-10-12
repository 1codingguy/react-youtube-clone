import React from 'react'
import styled from 'styled-components/macro'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

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

export const menuItems = [
  { Icon: RedYouTubeIcon, text: 'YouTube TV' },
  { Icon: YouTubeMusicLogo, text: 'YouTube Music' },
  { Icon: YouTubeKidsLogo, text: 'YouTube Kids' },
  { Icon: RedYouTubeIcon, text: 'Creator Academy' },
  { Icon: RedYouTubeIcon, text: 'YouTube for Artists' },
]
