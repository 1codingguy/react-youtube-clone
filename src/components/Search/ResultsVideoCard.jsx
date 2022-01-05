import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useMediaQuery } from '@material-ui/core'
import {
  TWO_COL_MIN_WIDTH,
  useIsMobileView,
  getFormattedDurationString,
  TWO_COL_MAX_WIDTH,
  useGetChannelDetails,
} from '../../utils/utils'
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

  // get duration and viewCount
  useGetVideoDetails(
    true, // useLocalStorage
    videoId,
    setDuration,
    setViewCount
  )

  // get channelAvatar for video or get channel info for channel
  useGetChannelDetails(
    true, // useLocalStorage
    isVideo,
    videoId,
    channelId,
    setChannelAvatar,
    setChannelInfo
  )

  const formattedDuration = getFormattedDurationString(duration)

  if (isVideo) {
    return (
      <StyledCard>
        <VideoThumbnail {...{ thumbnailImage, formattedDuration }} />

        {isMobileView ? (
          <MobileVideoContent
            {...{ title, channelTitle, publishedAt, viewCount }}
          />
        ) : (
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
      </StyledCard>
    )
  } else {
    // if the row is a channel
    return (
      <StyledCard>
        <ChannelImage thumbnailImage={thumbnailImage} />

        {isMobileView ? (
          <MobileChannelContent
            {...{ channelTitle, isMobileView, channelInfo }}
          />
        ) : (
          <DeskChannelContentContainer>
            <DesktopChannelContent {...{ channelTitle, channelInfo }} />
            {/* Red subscribe button if it's a channel on desktop view */}
            {!isMobileView && showSubscribeButton && <ChannelSubscribeButton />}
          </DeskChannelContentContainer>
        )}
      </StyledCard>
    )
  }
}

export default ResultsVideoCard

const DeskChannelContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 60%;
`

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
