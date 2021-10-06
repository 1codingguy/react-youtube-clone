import React, { useContext, useState } from 'react'
import { useAtom } from 'jotai'
import {
  useIsMobileView,
  useMinWidthToShowFullSidebar,
  useShouldShowMiniSidebar,
  MOBILE_VIEW_HEADER_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT,
  FULL_SIDEBAR_WIDTH,
  MINI_SIDEBAR_WIDTH,
} from './components/utils/utils'
import { userSettingToShowFullSidebarAtom } from './store'
import { useHistory } from 'react-router'
import { request } from './components/utils/api'

const YouTubeContext = React.createContext()

// Provider
export const ContextProvider = ({ children }) => {
  // determine the offset pixel for Videos component
  // retain in ContextProvider since there are lots of variables involved in calculation, importing all these every time causes lots of repetition

  const isMobileView = useIsMobileView()
  const minWidthToShowFullSidebar = useMinWidthToShowFullSidebar()
  const [userSettingToShowFullSidebar] = useAtom(
    userSettingToShowFullSidebarAtom
  )
  const shouldShowMiniSidebar = useShouldShowMiniSidebar()
  // combine user setting and width criteria
  const shouldShowFullSidebar =
    minWidthToShowFullSidebar && userSettingToShowFullSidebar

  const marginTopToOffset = isMobileView
    ? MOBILE_VIEW_HEADER_HEIGHT
    : DESKTOP_VIEW_HEADER_HEIGHT

  const marginLeftToOffset = shouldShowFullSidebar
    ? FULL_SIDEBAR_WIDTH
    : shouldShowMiniSidebar
    ? MINI_SIDEBAR_WIDTH
    : 0

  // React Router, Search form submit related

  // const history = useHistory()
  // const [searchTerm, setSearchTerm] = useState('')
  // const [searchTermNextPageToken, setSearchTermNextPageToken] = useState(null)
  // const [searchTermTotalResults, setSearchTermTotalResults] = useState(null)
  // const [searchResults, setSearchResults] = useState()

  // const getSearchTermVideos = async () => {
  //   const { data } = await request('/search', {
  //     params: {
  //       part: 'snippet',
  //       maxResults: 25,
  //       regionCode: 'GB',
  //       q: searchTerm,
  //     },
  //   })
  //   console.log(data)
  //   // store nextPageToken and totalResults into a state variable
  //   setSearchTermNextPageToken(data.pageInfo.nextPageToken)
  //   setSearchTermTotalResults(data.pageInfo.totalResults)
  //   // store data into localStorage, not just `items`
  //   localStorage.setItem(searchTerm, JSON.stringify(data))
  //   // store the items into a state variable
  //   setSearchResults(data.items)
  // }

  // const handleSearchFormSubmit = (e) => {
  //   e.preventDefault()
  //   // temporary if then statement to load search results from localStorage
  //   const storedResults = JSON.parse(localStorage.getItem(searchTerm))
  //   if (storedResults) {
  //     setSearchTermNextPageToken(storedResults.pageInfo.nextPageToken)
  //     setSearchTermTotalResults(storedResults.pageInfo.totalResults)
  //     setSearchResults(storedResults.items)
  //   } else {
  //     // query API with the searchTerm
  //     getSearchTermVideos(searchTerm)
  //   }
  //   // jump to the search Page
  //   history.push('/results?search_query=' + searchTerm)
  // }

  return (
    <YouTubeContext.Provider
      value={{
        marginTopToOffset,
        marginLeftToOffset,
        shouldShowFullSidebar,
        shouldShowMiniSidebar,
        // searchTerm,
        // setSearchTerm,
        // handleSearchFormSubmit,
        // searchResults,
      }}
    >
      {children}
    </YouTubeContext.Provider>
  )
}

// Consumer
export const useGlobalContext = () => {
  return useContext(YouTubeContext)
}
