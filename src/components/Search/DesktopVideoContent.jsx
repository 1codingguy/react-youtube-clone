import React from 'react'
import he from 'he'
import moment from 'moment'
import numeral from 'numeral'
import { MoreButton } from '../Videos/MoreButton'
import { DotSeparator } from '../Videos/ChannelDetails'
import {
  ContentContainer,
  VideoContentTop,
  SearchVideoTitle,
  StatsContainer,
  ContentText,
  AvatarContainer,
  StyledAvatar,
  DescriptionsContainer,
} from './searchUtils'

// desktop view can't use MUI CardHeader because position of elements inside CardHeader can't be changed.
export const DesktopVideoContent = ({
  title,
  viewCount,
  publishedAt,
  channelAvatar,
  channelTitle,
  description,
}) => {
  return (
    <ContentContainer>
      <Title title={title} />
      <Stats {...{ viewCount, publishedAt }} />
      <Avatar {...{ channelAvatar, channelTitle }} />
      <Descriptions description={description} />
    </ContentContainer>
  )
}

const Title = ({ title }) => {
  return (
    <VideoContentTop>
      <SearchVideoTitle variant="h3">{he.decode(title)}</SearchVideoTitle>
      <MoreButton isSearchPage={true} />
    </VideoContentTop>
  )
}

const Stats = ({ viewCount, publishedAt }) => {
  return (
    <StatsContainer>
      <ContentText variant="body2">
        <span style={{ marginRight: '4px' }}>
          {numeral(viewCount).format('0.a')} views
        </span>
        <DotSeparator /> <span>{moment(publishedAt).fromNow()}</span>
      </ContentText>
    </StatsContainer>
  )
}

const Avatar = ({ channelAvatar, channelTitle }) => {
  return (
    <AvatarContainer>
      <StyledAvatar src={channelAvatar} />
      <ContentText variant="subtitle1" style={{ paddingLeft: '8px' }}>
        {channelTitle}
      </ContentText>
    </AvatarContainer>
  )
}

const Descriptions = ({ description }) => {
  return (
    <DescriptionsContainer>
      {description.substr(0, 120) + '...'}
    </DescriptionsContainer>
  )
}
