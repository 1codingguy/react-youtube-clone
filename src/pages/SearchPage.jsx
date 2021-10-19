import React from 'react'
import { OuterVideoContainer as SearchContainer } from '../components/Videos/Videos'
import { useGlobalContext } from '../context'
import { List } from '@material-ui/core'
import styled from 'styled-components/macro'
import ResultsVideoCard from '../components/Search/ResultsVideoCard'
import { searchResultsAtom } from '../store'
import { useAtom } from 'jotai'
import { TWO_COL_MIN_WIDTH, useIsMobileView } from '../components/utils/utils'
import TuneIcon from '@material-ui/icons/Tune'
import { FilterButton } from '../components/Search/FilterButton'

const SearchPage = () => {
  const { marginLeftToOffset } = useGlobalContext()
  const isMobileView = useIsMobileView()
  const [searchResults] = useAtom(searchResultsAtom)

  return (
    <SearchContainer marginLeftToOffset={marginLeftToOffset}>
      <InnerSearchContainer>
        {!isMobileView && (
          <FilterButton
            variant="contained"
            color="default"
            startIcon={<TuneIcon />}
            disableElevation
            disableRipple
          >
            FILTERS
          </FilterButton>
        )}
        <VideoCardsContainer component="div">
          {searchResults &&
            searchResults.map((video) => {
              const key = video.id.videoId
                ? video.id.videoId
                : video.id.channelId
              return <ResultsVideoCard key={key} video={video} />
            })}
        </VideoCardsContainer>
      </InnerSearchContainer>
    </SearchContainer>
  )
}

export default SearchPage

const VideoCardsContainer = styled(List)`
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const InnerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1096px;
  margin: 0 auto;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    padding: 16px 24px;
  }
`
