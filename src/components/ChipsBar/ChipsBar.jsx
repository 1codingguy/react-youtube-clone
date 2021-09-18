import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'
import {
  HideOnScroll,
  MOBILE_VIEW_BREAKPOINT,
  MOBILE_VIEW_HEADER_HEIGHT as MOBILE_CATEGORIES_BAR_HEIGHT,
  DESKTOP_VIEW_HEADER_HEIGHT as DESKTOP_CATEGORIES_BAR_HEIGHT,
} from '../utils/utils'
import { useGlobalContext } from '../../context'
// import AppBar from '@material-ui/core/AppBar'
import Chip from '@material-ui/core/Chip'

/** topbar under the search that shows category filter chips that scroll left/right */
const ChipsBar = () => {
  const { marginLeftToOffset } = useGlobalContext()

  // const [value, setValue] = useState(0)

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  const [activeChipIndex, setActiveChipIndex] = useState(0)

  return (
    <HideOnScroll>
      <TestAppBar marginLeftToOffset={marginLeftToOffset}>
        <StyledTabs
          marginLeftToOffset={marginLeftToOffset}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="none"
          textColor="primary"
          value={0}
        >
          {[...new Array(20)].map((_, index) => {
            return (
              <TestChip
                key={`Chip #${index}`}
                label={`Chip #${index}`}
                active={index === activeChipIndex && true}
                onClick={() => setActiveChipIndex(index)}
              />
            )
          })}

          {/* <Tab label="Tab 1" /> */}
          {/* <TestChip label="Live" active />
          <TestChip label="Jazz" />
          <TestChip label="Sonatas" />
          <TestChip label="Chip #4" />
          <TestChip label="Chip #5" />
          <TestChip label="Chip #6" />
          <TestChip label="Chip #7" />
          <TestChip label="Chip #8" />
          <TestChip label="Chip #9" />
          <TestChip label="Chip #10" />
          <TestChip label="Chip #11" />
          <TestChip label="Chip #12" />
          <TestChip label="Chip #13" />
          <TestChip label="Chip #14" />
          <TestChip label="Chip #15" /> */}
        </StyledTabs>
      </TestAppBar>
    </HideOnScroll>
  )
}

export default ChipsBar

const Chips = () => {
  return [...new Array(20)].map((test, index) => {
    console.log(test, index)
  })
}

const TestChip = styled(Chip)`
  && {
    margin-right: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.active ? 'black' : 'rgba(0, 0, 0, 0.05)'};
    color: ${(props) => (props.active ? 'white' : '#030303')};
  }

  .MuiChip-label {
    padding: 0 12px;
    font-size: 0.875rem;
  }
`

const StyledTabs = styled(Tabs)`
  /* .Mui-disabled {
    width: 20px
  } */

  .MuiTabs-scrollable {
    display: flex;
    align-items: center;
    /* padding-left: 1rem; */
  }

  .MuiTabs-scrollButtons:first-of-type {
    /* background-color: red; */

    &::before {
      @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
        height: calc(${MOBILE_CATEGORIES_BAR_HEIGHT}px - 4px);
      }
      height: calc(${DESKTOP_CATEGORIES_BAR_HEIGHT}px - 6px);
      width: 50px;
      position: fixed;
      left: calc(40px + ${(props) => props.marginLeftToOffset}px);
      pointer-events: none;
      content: '';
      /* doesn't do the fade out effect as intented */
      background: linear-gradient(
        to right,
        white 20%,
        rgba(255, 255, 255, 0) 80%
      );
      /* background-color: red; */
    }
  }
  .MuiTabScrollButton-root:last-of-type {
    /* background-color: yellow; */

    &::before {
      @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
        height: calc(${MOBILE_CATEGORIES_BAR_HEIGHT}px - 4px);
      }
      height: calc(${DESKTOP_CATEGORIES_BAR_HEIGHT}px - 6px);
      width: 50px;
      position: fixed;
      right: 40px;
      content: '';
      pointer-events: none;
      background: linear-gradient(
        to left,
        white 20%,
        rgba(255, 255, 255, 0) 80%
      );
    }
  }
`

const TestAppBar = styled.div`
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    height: ${MOBILE_CATEGORIES_BAR_HEIGHT}px;
  }
  height: ${DESKTOP_CATEGORIES_BAR_HEIGHT}px;
  width: calc(100% - ${(props) => props.marginLeftToOffset}px);
  position: fixed;
  margin-left: ${(props) => props.marginLeftToOffset}px;
  background-color: white;
  transition: none !important;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  /* This doesn't even show in dev-tool if defined under StyledTabs */
  .MuiTabs-root {
    min-height: 100%;
  }
`
