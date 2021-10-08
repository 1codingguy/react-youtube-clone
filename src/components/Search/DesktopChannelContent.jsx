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
  return (
    <ContentContainer style={{ justifyContent: 'center' }}>
      <Title channelTitle={channelTitle} />
      <Stats channelInfo={channelInfo} />
      <Descriptions channelInfo={channelInfo} />
    </ContentContainer>
  )
}

const Title = ({ channelTitle }) => {
  return (
    <VideoContentTop>
      <SearchVideoTitle variant="h3">
        {he.decode(channelTitle)}
      </SearchVideoTitle>
    </VideoContentTop>
  )
}

const Stats = ({ channelInfo }) => {
  return (
    <StatsContainer>
      {channelInfo && (
        <ContentText variant="body2">
          <span style={{ marginRight: '4px' }}>
            {numeral(channelInfo.statistics.subscriberCount).format('0.0.a')}{' '}
            subscribers
          </span>
          <DotSeparator />{' '}
          <span>
            {numeral(channelInfo.statistics.videoCount).format('0,0')} videos
          </span>
        </ContentText>
      )}
    </StatsContainer>
  )
}

const Descriptions = ({ channelInfo }) => {
  return (
    <DescriptionsContainer>
      {channelInfo && channelInfo.snippet.description.substr(0, 120) + '...'}
    </DescriptionsContainer>
  )
}
