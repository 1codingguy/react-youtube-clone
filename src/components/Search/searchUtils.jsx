import { useEffect } from 'react'
import { request } from '../../utils/api'
import styled from 'styled-components/macro'
import { Typography, Avatar } from '@material-ui/core'
import { StyledCardHeader, VideoTitle } from '../Videos/VideoCard'
import { TWO_COL_MIN_WIDTH } from '../../utils/utils'

// this is unique to searchResults, because popular videos no need to get more details from 'contentDetails,statistics'
const getVideoDetails = async (
  useLocalStorage,
  videoId,
  durationSetterFunction,
  viewCountSetterFunction
) => {
  try {
    const {
      data: { items },
    } = await request('/videos', {
      params: {
        part: 'contentDetails,statistics',
        id: videoId,
      },
    })
    durationSetterFunction(items[0].contentDetails.duration)
    viewCountSetterFunction(items[0].statistics.viewCount)

    if (useLocalStorage) {
      localStorage.setItem(
        `${videoId}_duration`,
        JSON.stringify(items[0].contentDetails.duration)
      )
      localStorage.setItem(
        `${videoId}_viewCount`,
        JSON.stringify(items[0].statistics.viewCount)
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export const useGetVideoDetails = (
  useLocalStorage,
  videoId,
  durationSetterFunction,
  viewCountSetterFunction
) => {
  useEffect(() => {
    let storedDuration
    let storedViewCount

    if (useLocalStorage) {
      storedDuration = JSON.parse(localStorage.getItem(`${videoId}_duration`))
      storedViewCount = JSON.parse(localStorage.getItem(`${videoId}_viewCount`))
    }

    if (storedDuration && storedViewCount) {
      durationSetterFunction(storedDuration)
      viewCountSetterFunction(storedViewCount)
    } else {
      getVideoDetails(
        useLocalStorage,
        videoId,
        durationSetterFunction,
        viewCountSetterFunction
      )
    }
  }, [
    useLocalStorage,
    videoId,
    durationSetterFunction,
    viewCountSetterFunction,
  ])
}

export const DescriptionsContainer = styled(Typography)`
  && {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      margin-top: 4px;
      width: 80%;
    }
  }
`

export const ContentText = styled(Typography)`
  && {
    font-size: 12px;
  }
`

export const StatsContainer = styled.div`
  font-size: 12px;
`

export const StyledAvatar = styled(Avatar)`
  && {
    height: 24px;
    width: 24px;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  padding: 12px 0;
  align-items: center;
`

export const VideoContentTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 60%;
`

export const SearchCardHeader = styled(StyledCardHeader)`
  && {
    align-items: flex-start;
    flex-grow: 1;
    padding: 0 8px;

    .MuiCardHeader-content {
      padding: 0;
    }
  }
`
export const SearchVideoTitle = styled(VideoTitle)`
  && {
    font-weight: 400;
    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      font-size: 18px;
      max-height: 52px;
      line-height: 26px;
    }
  }
`
