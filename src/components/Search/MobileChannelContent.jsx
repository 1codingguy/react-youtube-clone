import React from 'react'
import he from 'he'
import numeral from 'numeral'
import styled from 'styled-components/macro'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'
import { SearchCardHeader, SearchVideoTitle } from './searchUtils'

export const MobileChannelContent = ({
  channelTitle,
  isMobileView,
  channelInfo,
}) => {
  return (
    <SearchCardHeader
      title={<Title {...{ channelTitle }} />}
      subheader={<Stats {...{ isMobileView, channelInfo }} />}
    />
  )
}

const Stats = ({ isMobileView, channelInfo }) => {
  return (
    <ChannelStatsContainer style={isMobileView ? { fontSize: '12px' } : null}>
      {channelInfo && (
        <>
          <p>
            {numeral(channelInfo.statistics.videoCount).format('0,0')} videos
          </p>
          <p>
            {numeral(channelInfo.statistics.subscriberCount).format('0.0.a')}{' '}
            subscribers
          </p>
        </>
      )}
    </ChannelStatsContainer>
  )
}

const Title = ({ channelTitle }) => {
  return (
    <SearchVideoTitle variant="h4">{he.decode(channelTitle)}</SearchVideoTitle>
  )
}

const ChannelStatsContainer = styled.div`
  opacity: 0.6;
  line-height: 14px;
  color: rgb(96, 96, 96);
  /* letter-spacing: 0.3px; */
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
  }
`
