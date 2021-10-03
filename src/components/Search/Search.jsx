import React from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { OuterVideoContainer as SearchContainer } from '../Videos/Videos'
import { useGlobalContext } from '../../context'
import { Typography } from '@material-ui/core'

const Search = () => {
  const { marginLeftToOffset } = useGlobalContext()

  // const history = useHistory()
  // const location = useLocation()

  // console.log(history)
  // console.log(location)

  // const queries = new URLSearchParams(location.search)
  // console.log(queries.toString())
  // console.log(queries.get('search_query'))

  return (
    <SearchContainer marginLeftToOffset={marginLeftToOffset}>
      <Typography variant="h1">Search page</Typography>
    </SearchContainer>
  )
}

export default Search
