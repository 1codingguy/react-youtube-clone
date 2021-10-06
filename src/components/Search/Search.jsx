import React from 'react'
// import { useParams, useHistory, useLocation } from 'react-router-dom'
import { OuterVideoContainer as SearchContainer } from '../Videos/Videos'
import { useGlobalContext } from '../../context'
import { List } from '@material-ui/core'
import styled from 'styled-components'
import ResultsVideoCard from './ResultsVideoCard'
import { searchResultsAtom } from '../../store'
import { useAtom } from 'jotai'

const Search = () => {
  const { marginLeftToOffset } = useGlobalContext()

  // load result directly from localStorage for now to test the layout
  // const results = JSON.parse(localStorage.getItem('kitten')).items
  // console.log(results)

  const [searchResults] = useAtom(searchResultsAtom)
  // console.log(searchResults)

  return (
    <SearchContainer marginLeftToOffset={marginLeftToOffset}>
      {/* FILTERS button here */}
      <InnerSearchContainer>
        <List>
          {searchResults &&
            searchResults.map((video) => {
              return <ResultsVideoCard key={video.id.videoId} video={video} />
            })}
        </List>
      </InnerSearchContainer>
    </SearchContainer>
  )
}

export default Search

const InnerSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1096px;
  margin: 0 auto;
`
