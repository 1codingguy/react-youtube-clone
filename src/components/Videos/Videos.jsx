import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { ThemeProvider } from '@material-ui/styles'
import VideoCard from './VideoCard'
import { Grid } from '@material-ui/core'
import { columnBreakpoints } from './columnBreakpoints'
import {
  useIsMobileView,
  TWO_COL_MIN_WIDTH,
  TWO_COL_MAX_WIDTH,
  THREE_COL_MIN_WIDTH,
  THREE_COL_MAX_WIDTH,
  FOUR_COL_MIN_WIDTH,
  FOUR_COL_MAX_WIDTH,
  SIX_COL_MIN_WIDTH,
  SIX_COL_MAX_WIDTH,
} from '../utils/utils'

const Videos = () => {
  const { marginTopToOffset, marginLeftToOffset } = useGlobalContext()
  const isMobileView = useIsMobileView()

  return (
    <>
      <OuterVideoContainer
        marginTopToOffset={marginTopToOffset}
        marginLeftToOffset={marginLeftToOffset}
      >
        <ThemeProvider theme={columnBreakpoints}>
          <InnerVideoContainer>
            <Grid container spacing={isMobileView ? 0 : 1}>
              <SampleGridItem />
              <SampleGridItem />
              <SampleGridItem />
              <SampleGridItem />
              <SampleGridItem />
              <SampleGridItem />
            </Grid>
          </InnerVideoContainer>
        </ThemeProvider>
      </OuterVideoContainer>
    </>
  )
}

export default Videos

const SampleGridItem = () => {
  return (
    <Grid
      container
      justifyContent="center"
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <VideoCard />
    </Grid>
  )
}

const OuterVideoContainer = styled.div`
  min-height: 200vh;
  background-color: #f9f9f9;
  display: inline-block;
  padding-top: ${(props) => props.marginTopToOffset}px;
  padding-left: ${(props) => props.marginLeftToOffset}px;
  /* width: calc(100% - ${(props) => props.marginLeftToOffset}px); */
  width: 100%;
`

const InnerVideoContainer = styled.div`
  /* mobile view has 0 margin */
  margin: 0;
  @media screen and (min-width: ${TWO_COL_MIN_WIDTH}px) {
    max-width: ${TWO_COL_MAX_WIDTH}px;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${THREE_COL_MIN_WIDTH}px) {
    max-width: ${THREE_COL_MAX_WIDTH}px;
    // from 872 px up there's padding left and right
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: ${FOUR_COL_MIN_WIDTH}px) {
    max-width: ${FOUR_COL_MAX_WIDTH}px;
  }
  /* There's no five columns with MUI Grid 
  @media screen and (min-width: 1952px) {
    max-width: 1804px;
  } */
  @media screen and (min-width: ${SIX_COL_MIN_WIDTH}px) {
    max-width: ${SIX_COL_MAX_WIDTH}px;
  }
  
  
`
