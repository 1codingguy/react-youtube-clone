import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Typography } from '@material-ui/core'
import { MOBILE_VIEW_BREAKPOINT } from '../utils/utils'

const VideoCard = () => {
  return (
    <StyledCard square={true} elevation={0}>
      <CardMedia image={imgUrl} component="img" style={{ width: '100%' }} />

      <StyledCardHeader
        avatar={<StyledAvatar>c</StyledAvatar>}
        action={<MoreButton />}
        title={<Title variant="h3">Video Title</Title>}
        subheader={<SubHeader />}
      />
    </StyledCard>
  )
}

export default VideoCard

const MoreButton = () => {
  return (
    <IconButton disableRipple={true} style={{ padding: '8px' }}>
      <MoreVertIcon />
    </IconButton>
  )
}

const SubHeader = () => {
  return (
    <div style={{ lineHeight: '18px', color: 'rgb(96, 96, 96)' }}>
      <p >Channel name</p>
      <p >
        <span>10K views</span>
        <Separator />
        <span>2 weeks ago</span>
      </p>
    </div>
  )
}

const StyledCard = styled(Card)`
  && {
    background-color: transparent;
  }

  .MuiCardHeader-content {
    padding-left: 12px;
  }

  @media screen and (min-width: ${MOBILE_VIEW_BREAKPOINT + 1}px) {
    .MuiCardHeader-root {
      padding: 10px 0;
    }
  }
`

const Separator = () => {
  return <span>&nbsp;•&nbsp;</span>
}

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-avatar {
    align-self: flex-start;
    margin-right: 0;
  }
`

const Title = styled(Typography)`
  /* 1rem in original YouTube in 10px */
  && {
    font-size: 14px;
    line-height: 20px;
    max-height: 40px;
    font-weight: 600;
  }
`

const StyledAvatar = styled(Avatar)`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    &&& {
      width: 40px;
      height: 40px;
    }
  }

  && {
    width: 36px;
    height: 36px;
    background-color: #ef6c00;
  }
`

const imgUrl =
  'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnuEiB52zi3CJmpBk9QXJqxeZq3Q'

const imgUrl2 = 'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg'
