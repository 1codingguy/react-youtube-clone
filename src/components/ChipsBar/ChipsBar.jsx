import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import styled from 'styled-components'
import {
  HideOnScroll,
  MOBILE_VIEW_HEADER_HEIGHT as MOBILE_CATEGORIES_BAR_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT as DESKTOP_CATEGORIES_BAR_HEIGHT,
  TWO_COL_MIN_WIDTH,
  HEADER_OPACITY,
  CHIPS_BAR_MAX_WIDTH,
} from '../utils/utils'
import { useGlobalContext } from '../../context'
import { Chips } from './Chips'

const ChipsBar = ({
  selectedChipIndex,
  setSelectedChipIndex,
  setLandingPageVideos,
  setPopularVideosNextPageToken,
}) => {
  const { marginLeftToOffset } = useGlobalContext()

  return (
    <HideOnScroll>
      <ChipsContainer marginLeftToOffset={marginLeftToOffset}>
        <StyledTabs
          variant="scrollable"
          scrollButtons="off"
          // indicatorColor="none"
          textColor="primary"
          value={0}
        >
          <Chips
            {...{
              selectedChipIndex,
              setSelectedChipIndex,
              setLandingPageVideos,
              setPopularVideosNextPageToken,
            }}
          />
        </StyledTabs>
      </ChipsContainer>
    </HideOnScroll>
  )
}

export default ChipsBar

const StyledTabs = styled(Tabs)`
  /* to make the tabs indicator invisible */
  .MuiTabs-indicator {
    background-color: transparent;
  }

  .MuiTabs-scrollable {
    display: flex;
    align-items: center;
    padding-left: 12px;

    @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
      padding-left: 24px;
    }
  }
`

const ChipsContainer = styled.div`
  height: ${MOBILE_CATEGORIES_BAR_HEIGHT}px;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    height: ${DESKTOP_CATEGORIES_BAR_HEIGHT}px;
    /* Header is using transition, so shouldn't disable here otherwise HideOnScroll not in sync */
    transition: none !important;
    opacity: ${HEADER_OPACITY};
  }
  width: calc(100vw - ${(props) => props.marginLeftToOffset}px);
  position: fixed;
  margin-left: ${(props) => props.marginLeftToOffset}px;
  background-color: white;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  z-index: 1000; // 100 less than AppBar, to show the AppBar shadow, as well as to prevent Avatar and IconButton appears on top of the ChipsBar

  /* This doesn't even show in dev-tool if defined under StyledTabs */
  .MuiTabs-root {
    height: 100%;
  }

  /* ChipsBar has a max-width of 1680px because it's hard-coded */
  /* Above lg screen size, the ChipsBar should be in the center */
  /* below formula doesn't seem to be correct */
  /* calc(${CHIPS_BAR_MAX_WIDTH}px - ${(props) =>
    props.marginLeftToOffset}px)) */

  @media screen and (min-width: ${CHIPS_BAR_MAX_WIDTH}px) {
    .MuiTabs-scroller {
      justify-content: center;
    }
  }
`
