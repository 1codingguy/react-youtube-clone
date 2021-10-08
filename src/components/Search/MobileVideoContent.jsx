import React from 'react'
import he from 'he'
import { MoreButton } from '../Videos/MoreButton'
import { ChannelDetails } from '../Videos/ChannelDetails'
import { SearchCardHeader, SearchVideoTitle } from './searchUtils'

// Mobile view can make sure of CardHeader from MUI
export const MobileVideoContent = ({
  title,
  channelTitle,
  publishedAt,
  viewCount,
}) => {
  return (
    <SearchCardHeader
      action={<MoreButton isSearchPage={true} />}
      title={<Title title={title} />}
      subheader={
        <ChannelDetails
          {...{
            channelTitle,
            publishedAt,
            viewCount,
            isSearchPage: true,
          }}
        />
      }
    />
  )
}

const Title = ({ title }) => {
  return <SearchVideoTitle variant="h4">{he.decode(title)}</SearchVideoTitle>
}
