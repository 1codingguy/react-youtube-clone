import React from 'react'
import VideoCard from './VideoCard'
import { Grid } from '@material-ui/core'
import { VideoSkeleton } from './VideoSkeleton'

export const GridItem = ({ video }) => {
  return (
    <Grid
      container
      item
      // not sure if justifyContent is needed if MuiPaper-root had width: 100%, need to test
      justifyContent="center"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      {/* change here if remove loading-skeleton */}
      {video ? <VideoCard video={video} /> : <VideoSkeleton />}
    </Grid>
  )
}
