import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Typography } from '@material-ui/core'
import {
  MOBILE_VIEW_MAX_WIDTH,
  TWO_COL_MIN_WIDTH,
  useIsMobileView,
} from '../utils/utils'
import { request } from '../utils/api'
import moment from 'moment'
import numeral from 'numeral'
import he from 'he'

const VideoCard = ({ video }) => {
  const isMobileView = useIsMobileView()

  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      // thumbnails,
      thumbnails: { medium },
    },
  } = video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelAvatar, setChannelAvatar] = useState(null)

  // // the following 3 lines can be moved inside useEffect() to have duration processed, so that data loaded from localStorage can be used right away
  // const seconds = moment.duration(duration).asSeconds()
  // // what is there's hours?
  // let _duration = moment.utc(seconds * 1000).format('mm:ss')

  // // To get rid of leading 0 if there is
  // _duration = _duration[0] === '0' ? _duration.slice(1) : _duration

  useEffect(() => {
    // the stored data is string, not sure what to do to return original type
    // or simply do some processing when first get the data to make sure the data retrieve from localStorage can be a string, and can be used right away without further processing?
    const storedDuration = JSON.parse(
      localStorage.getItem(`${videoId}_duration`)
    )
    const storedViews = JSON.parse(localStorage.getItem(`${videoId}_views`))

    const get_video_details = async () => {
      const {
        data: { items },
      } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: videoId,
        },
      })

      const seconds = moment
        .duration(items[0].contentDetails.duration)
        .asSeconds()
      let time = moment.utc(seconds * 1000).format('mm:ss')
      // To get rid of leading 0 if there is
      time = time[0] === '0' ? time.slice(1) : time

      localStorage.setItem(`${videoId}_duration`, JSON.stringify(time))
      setDuration(time)

      // views is processed with numeral inside component, just stringify into storage
      localStorage.setItem(
        `${videoId}_views`,
        JSON.stringify(items[0].statistics.viewCount)
      )
      setViews(items[0].statistics.viewCount)
    }

    // if duration and views are in localStorage then no need to query from YouTube API
    if (storedDuration && storedViews) {
      setDuration(storedDuration)
      setViews(storedViews)
      console.log('using stored duration and views')
    } else {
      get_video_details()
    }
  }, [videoId])

  useEffect(() => {
    const storedChannelAvatar = JSON.parse(
      localStorage.getItem(`${videoId}_channelAvatar`)
    )

    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      })

      // retrieve the url property inside component, just stringify in localStorage
      localStorage.setItem(
        `${videoId}_channelAvatar`,
        JSON.stringify(items[0].snippet.thumbnails.default)
      )
      setChannelAvatar(items[0].snippet.thumbnails.default)
    }

    if (storedChannelAvatar) {
      setChannelAvatar(storedChannelAvatar)
      console.log('using local stored channelAvatar')
    } else {
      get_channel_icon()
    }
  }, [channelId])

  return (
    <StyledCard square={true} elevation={0}>
      <ImageContainer>
        <CardMedia
          image={medium.url}
          component="img"
          style={{ width: '100%' }}
        />
        <Duration variant="body2">{duration}</Duration>
      </ImageContainer>

      <StyledCardHeader
        avatar={<StyledAvatar src={channelAvatar ? channelAvatar.url : ''} />}
        action={<MoreButton />}
        title={<Title variant="h3">{he.decode(title)}</Title>}
        subheader={<SubHeader {...{ channelTitle, publishedAt, views }} />}
      />
    </StyledCard>
  )
}

export default VideoCard

const ImageContainer = styled.div`
  /* for the duration container in bottom right corner */
  position: relative;
`

const Duration = styled(Typography)`
  && {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 4px;
    padding: 2px 6px;
    background-color: black;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
  }
`

const MoreButton = () => {
  return (
    <IconButton disableRipple={true} style={{ padding: '8px' }}>
      <MoreVertIcon />
    </IconButton>
  )
}

const ChannelDetailsContainer = styled.div`
  && {
    line-height: 14px;
    color: rgb(96, 96, 96);

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      line-height: 18px;
    }
  }
`

const ChannelTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
    && {
      font-size: 12px;
      margin-right: 4px;
    }
  }
`

const StatsContainer = styled.div`
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const SubHeader = ({ channelTitle, publishedAt, views }) => {
  const isMobileView = useIsMobileView()
  return (
    <ChannelDetailsContainer style={isMobileView ? { fontSize: '12px' } : null}>
      {/* ChannelTitle is outside StatsContainer in desktop view */}
      {isMobileView ? null : (
        <ChannelTitle variant="subtitle2">{channelTitle}</ChannelTitle>
      )}

      <StatsContainer>
        {isMobileView && (
          <ChannelTitle variant="span">
            {channelTitle} <DotSeparator />
          </ChannelTitle>
        )}
        <span>
          {numeral(views).format('0.a')} views <DotSeparator />
        </span>

        <span>{moment(publishedAt).fromNow()}</span>
      </StatsContainer>
    </ChannelDetailsContainer>
  )
}

const StyledCard = styled(Card)`
  && {
    background-color: transparent;
    margin-bottom: 30px; // original is 40px but 30px here account for padding
    @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
      margin-bottom: 0;
    }
    width: 100%;
  }
`

const DotSeparator = () => {
  return <span>&nbsp;•&nbsp;</span>
}

const StyledCardHeader = styled(CardHeader)`
  && {
    padding: 10px 0;

    @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
      padding: 10px;
    }
  }
  .MuiCardHeader-avatar {
    align-self: flex-start;
    margin-right: 0;
  }
  .MuiCardHeader-content {
    padding-left: 12px;
  }
`

const Title = styled(Typography)`
  /* 1rem in original YouTube in 10px */
  && {
    font-size: 14px;
    line-height: 20px;
    max-height: 40px;
    font-weight: 600;
    max-height: 40px;
    margin-bottom: 3px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      margin-bottom: 6px;
    }
  }
`

const StyledAvatar = styled(Avatar)`
  @media screen and (max-width: ${MOBILE_VIEW_MAX_WIDTH}px) {
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

// imgUrl and imgUrl2 only for test without querying data from YouTube API, can be deleted when finished
const imgUrl =
  'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnuEiB52zi3CJmpBk9QXJqxeZq3Q'

const imgUrl2 = 'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg'

// MobileSubheader is no longer needed as SubHeader has logic for mobile view styling
// const MobileSubHeader = ({ channelTitle, publishedAt, views }) => {
//   return (
//     <ChannelDetailsContainer style={{ fontSize: '12px' }}>
//       <p>
//         <span style={{ marginRight: '4px' }}>{channelTitle}</span>
//         <DotSeparator />
//         <span style={{ marginRight: '4px' }}>
//           {numeral(views).format('0.a')} views
//         </span>
//         <DotSeparator />
//         <span>{moment(publishedAt).fromNow()}</span>
//       </p>
//     </ChannelDetailsContainer>
//   )
// }
