import React, { useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core'
import {
  TWO_COL_MIN_WIDTH,
  useIsMobileView,
  getFormattedDurationString,
  TWO_COL_MAX_WIDTH,
  useGetChannelDetails,
} from '../utils/utils'
import { useGetVideoDetails } from './searchUtils'
import { ChannelImage } from './ChannelImage'
import { VideoThumbnail } from './VideoThumbnail'
import { MobileChannelContent } from './MobileChannelContent'
import { MobileVideoContent } from './MobileVideoContent'
import { ChannelSubscribeButton } from './ChannelSubscribeButton'
import { DesktopChannelContent } from './DesktopChannelContent'
import { DesktopVideoContent } from './DesktopVideoContent'

const ResultsVideoCard = ({ video }) => {
  const {
    id: { kind, videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails,
      description,
    },
  } = video

  const isMobileView = useIsMobileView()
  const isVideo = kind === 'youtube#video'
  const showSubscribeButton = useMediaQuery(
    `(min-width: ${TWO_COL_MAX_WIDTH}px)`
  )
  const [viewCount, setViewCount] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelAvatar, setChannelAvatar] = useState(null)
  const [channelInfo, setChannelInfo] = useState(null)
  const thumbnailImage = thumbnails.medium.url

  useGetVideoDetails(true, videoId, setDuration, setViewCount)

  // to get channelAvatar for video, get channel details for channel
  useGetChannelDetails(
    true, // useLocalStorage
    isVideo,
    videoId,
    channelId,
    setChannelAvatar,
    setChannelInfo
  )

  const formattedDuration = getFormattedDurationString(duration)

  return (
    <StyledCard>
      {/* The image on the left on each row */}
      {!isVideo ? (
        <ChannelImage thumbnailImage={thumbnailImage} />
      ) : (
        <VideoThumbnail {...{ thumbnailImage, formattedDuration }} />
      )}

      {/* the content on the right on each row */}

      {isMobileView && isVideo && (
        <MobileVideoContent
          {...{ title, channelTitle, publishedAt, viewCount }}
        />
      )}

      {isMobileView && !isVideo && (
        <MobileChannelContent
          {...{ channelTitle, isMobileView, channelInfo }}
        />
      )}

      {!isMobileView && isVideo && (
        <DesktopVideoContent
          {...{
            title,
            viewCount,
            publishedAt,
            channelAvatar,
            channelTitle,
            description,
          }}
        />
      )}

      {!isMobileView && !isVideo && (
        <DesktopChannelContent {...{ channelTitle, channelInfo }} />
      )}

      {/* Red subscribe button if it's a channel on desktop view */}
      {!isMobileView && !isVideo && showSubscribeButton && (
        <ChannelSubscribeButton />
      )}
    </StyledCard>
  )
}

export default ResultsVideoCard

const StyledCard = styled.div`
  margin-top: 12px;
  padding: 0 12px;
  height: 90px;
  display: flex;

  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    height: 100%;
    width: 100%;
  }
`