import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { MOBILE_VIEW_BREAKPOINT } from '../utils/utils'
import { ThemeProvider } from '@material-ui/styles'
import VideoCard from './VideoCard'
import { Grid } from '@material-ui/core'
import { columnBreakpoints } from './columnBreakpoints'

const Videos = () => {
  const { marginTopToOffset, marginLeftToOffset } = useGlobalContext()

  return (
    <>
      <OuterVideoContainer
        marginTopToOffset={marginTopToOffset}
        marginLeftToOffset={marginLeftToOffset}
      >
        <ThemeProvider theme={columnBreakpoints}>
          <InnerVideoContainer>
            <Grid container spacing={1}>
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
  @media screen and (min-width: 496px) {
    max-width: 672px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 872px) {
    max-width: 1008px;
  }
  @media screen and (min-width: 1128px) {
    max-width: 1504px;
  }
  @media screen and (min-width: 1952px) {
    max-width: 1804px;
  }
  @media screen and (min-width: 2288px) {
    max-width: 2256px;
    
  }
  @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    margin: 0;
    margin-top: 12px;
  }
  margin: 24px 8px;
  margin-bottom: 0;
`
