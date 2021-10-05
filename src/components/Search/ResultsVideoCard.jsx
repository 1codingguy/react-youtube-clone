import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  ImageContainer,
  DurationContainer,
  StyledCardHeader,
  VideoTitle,
} from '../Videos/VideoCard'
import { MoreButton } from '../Videos/MoreButton'
import { ChannelDetails } from '../Videos/ChannelDetails'
import he from 'he'
import { request } from '../utils/api'
import moment from 'moment'

const ResultsVideoCard = ({ video }) => {
  const {
    id: { kind, videoId },
    snippet: { channelId, channelTitle, title, publishedAt, thumbnails },
  } = video

  const thumbnailImage = thumbnails.medium.url

  const [viewCount, setViewCount] = useState(null)
  const [duration, setDuration] = useState(null)

  // this is unique to searchResults, because popular videos no need to get more details from 'contentDetails,statistics'
  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const {
          data: { items },
        } = await request('/videos', {
          params: {
            part: 'contentDetails,statistics',
            id: videoId,
          },
        })
        setDuration(items[0].contentDetails.duration)
        setViewCount(items[0].statistics.viewCount)
      } catch (error) {
        console.log(error)
      }
    }

    getVideoDetails()
  }, [videoId])

  let formattedDuration = moment.duration(duration).asSeconds()
  formattedDuration = moment.utc(formattedDuration * 1000).format('mm:ss')
  // remove leading '0'
  formattedDuration =
    formattedDuration[0] === '0'
      ? formattedDuration.slice(1)
      : formattedDuration

  return (
    <StyledCard>
      <ImageContainer>
        <img
          src={thumbnailImage}
          style={{ height: '100%', cursor: 'pointer' }}
        />
        <DurationContainer variant="body2">
          {formattedDuration}
        </DurationContainer>
      </ImageContainer>
      <SearchCardHeader
        style={{ flexGrow: 1, padding: '0 8px' }}
        action={<MoreButton isSearchPage={true} />}
        title={
          <SearchVideoTitle variant="h4">{he.decode(title)}</SearchVideoTitle>
        }
        subheader={
          <ChannelDetails
            {...{ channelTitle, publishedAt, viewCount, isSearchPage: true }}
          />
        }
      />
    </StyledCard>
  )
}

export default ResultsVideoCard

const SearchCardHeader = styled(StyledCardHeader)`
  && {
    align-items: flex-start;

    .MuiCardHeader-content {
      padding: 0;
    }
  }
`

const SearchVideoTitle = styled(VideoTitle)`
  && {
    font-weight: 400;
    /* -webkit-line-clamp: 3; */
  }
`

const StyledCard = styled.div`
  margin-top: 12px;
  padding: 0 12px;
  height: 90px;
  display: flex;
`
