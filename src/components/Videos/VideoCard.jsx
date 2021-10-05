import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import { useIsMobileView, TWO_COL_MIN_WIDTH } from '../utils/utils'
import { request } from '../utils/api'
import moment from 'moment'
import he from 'he'
import { ChannelDetails } from './ChannelDetails'
import { MoreButton } from './MoreButton'

const VideoCard = ({ video }) => {
  const isMobileView = useIsMobileView()
  const {
    id: videoId,
    contentDetails: { duration },
    snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
    statistics: { viewCount },
  } = video

  const thumbnailImage = isMobileView
    ? thumbnails.medium.url
    : thumbnails.maxres
    ? thumbnails.maxres.url
    : thumbnails.medium.url

  let formattedDuration = moment.duration(duration).asSeconds()
  formattedDuration = moment.utc(formattedDuration * 1000).format('mm:ss')
  // remove leading '0'
  formattedDuration =
    formattedDuration[0] === '0'
      ? formattedDuration.slice(1)
      : formattedDuration

  const [channelAvatar, setChannelAvatar] = useState(null)

  // Get channelAvatar by querying './channels' of YouTube API
  useEffect(() => {
    // localStorage, to be deleted when finished.
    // const storedChannelAvatar = JSON.parse(
    //   localStorage.getItem(`${videoId}_channelAvatar`)
    // )

    const queryChannelAvatar = async () => {
      try {
        const {
          data: { items },
        } = await request('/channels', {
          params: {
            part: 'snippet',
            id: channelId,
          },
        })
        // retrieve the url property inside component, just stringify in localStorage
        // localStorage.setItem(
        //   `${videoId}_channelAvatar`,
        //   JSON.stringify(items[0].snippet.thumbnails.default)
        // )
        setChannelAvatar(items[0].snippet.thumbnails.default)
      } catch (error) {
        console.log(error)
      }
    }

    queryChannelAvatar()

    // // localStorage, to be deleted when finished
    // if (storedChannelAvatar) {
    //   setChannelAvatar(storedChannelAvatar)
    //   // console.log('using local stored channelAvatar')
    // } else {
    //   queryChannelAvatar()
    // }
  }, [videoId, channelId])

  return (
    <StyledCard square={true} elevation={0}>
      <ImageContainer>
        <CardMedia
          // every video has medium size thumbnail, use as fallback if maxres not available
          image={thumbnailImage}
          component="img"
          style={{ width: '100%', cursor: 'pointer' }}
        />
        <DurationContainer variant="body2">
          {formattedDuration}
        </DurationContainer>
      </ImageContainer>

      <StyledCardHeader
        avatar={<StyledAvatar src={channelAvatar ? channelAvatar.url : ''} />}
        action={<MoreButton />}
        title={<VideoTitle variant="h3">{he.decode(title)}</VideoTitle>}
        subheader={
          <ChannelDetails {...{ channelTitle, publishedAt, viewCount }} />
        }
      />
    </StyledCard>
  )
}

export default VideoCard

export const StyledIconButton = styled(IconButton)`
  && {
    padding: 8px;
    color: #030303;

    &:hover {
      background-color: transparent;
    }
  }
`

export const ImageContainer = styled.div`
  /* for the duration container in bottom right corner */
  position: relative;
`

export const DurationContainer = styled(Typography)`
  && {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 4px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    border-radius: 2px;
    padding: 1px 4px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      padding: 2px 6px;
    }
  }
`

const StyledCard = styled(Card)`
  && {
    width: 100%;
    margin-bottom: 10px;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      background-color: transparent;
      margin-bottom: 30px; // original is 40px but 30px here account for padding
    }
  }
`

export const StyledCardHeader = styled(CardHeader)`
  && {
    padding: 10px;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      padding: 10px 0;
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

export const VideoTitle = styled(Typography)`
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
    cursor: pointer;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      margin-bottom: 6px;
    }
  }
`

export const StyledAvatar = styled(Avatar)`
  &&& {
    cursor: pointer;
    width: 40px;
    height: 40px;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      width: 36px;
      height: 36px;
      background-color: #ef6c00;
    }
  }
`

// imgUrl and imgUrl2 only for test without querying data from YouTube API, can be deleted when finished
// const imgUrl =
//   'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnuEiB52zi3CJmpBk9QXJqxeZq3Q'

// const imgUrl2 = 'https://i.ytimg.com/vi/F3Bar3rty_4/hqdefault.jpg'

// Original useEffect to query viewCount and video duration

// useEffect(() => {
//   // the stored data is string, not sure what to do to return original type
//   // or simply do some processing when first get the data to make sure the data retrieve from localStorage can be a string, and can be used right away without further processing?
//   const storedDuration = JSON.parse(
//     localStorage.getItem(`${videoId}_duration`)
//   )
//   const storedViews = JSON.parse(localStorage.getItem(`${videoId}_views`))

//   const get_video_details = async () => {
//     const {
//       data: { items },
//     } = await request('/videos', {
//       params: {
//         part: 'contentDetails,statistics',
//         id: videoId,
//       },
//     })

//     const seconds = moment
//       .duration(items[0].contentDetails.duration)
//       .asSeconds()
//     let time = moment.utc(seconds * 1000).format('mm:ss')
//     // To get rid of leading 0 if there is
//     time = time[0] === '0' ? time.slice(1) : time

//     localStorage.setItem(`${videoId}_duration`, JSON.stringify(time))
//     setDuration(time)

//     // views is processed with numeral inside component, just stringify into storage
//     localStorage.setItem(
//       `${videoId}_views`,
//       JSON.stringify(items[0].statistics.viewCount)
//     )
//     setViews(items[0].statistics.viewCount)
//   }

//   // if duration and views are in localStorage then no need to query from YouTube API
//   if (storedDuration && storedViews) {
//     setDuration(storedDuration)
//     setViews(storedViews)
//     // console.log('using stored duration and views')
//   } else {
//     get_video_details()
//   }
// }, [videoId])
