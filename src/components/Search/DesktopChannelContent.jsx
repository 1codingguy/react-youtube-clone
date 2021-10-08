import React from 'react'
import he from 'he'
import numeral from 'numeral'
import { DotSeparator } from '../Videos/ChannelDetails'
import {
  ContentContainer,
  VideoContentTop,
  SearchVideoTitle,
  StatsContainer,
  ContentText,
  DescriptionsContainer,
} from './searchUtils'

export const DesktopChannelContent = ({ channelTitle, channelInfo }) => {
  const {
    statistics: { subscriberCount, videoCount },
    snippet: { description },
  } = channelInfo

  return (
    <ContentContainer style={{ justifyContent: 'center' }}>
      <VideoContentTop>
        <SearchVideoTitle variant="h3">
          {he.decode(channelTitle)}
        </SearchVideoTitle>
      </VideoContentTop>

      <StatsContainer>
        {channelInfo && (
          <ContentText variant="body2">
            <span style={{ marginRight: '4px' }}>
              {numeral(subscriberCount).format('0.0.a')} subscribers
            </span>
            <DotSeparator />{' '}
            <span>{numeral(videoCount).format('0,0')} videos</span>
          </ContentText>
        )}
      </StatsContainer>

      <DescriptionsContainer>
        {channelInfo && description.substr(0, 120) + '...'}
      </DescriptionsContainer>
    </ContentContainer>
  )
}
