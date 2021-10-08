import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const VideoSkeleton = () => {
  return (
    <div style={{ width: '100%', margin: '1rem ' }}>
      <SkeletonTheme>
        <Skeleton height={180} />
        <div>
          <Skeleton
            style={{ margin: '0.5rem 0' }}
            circle
            height={40}
            width={40}
          />
          <Skeleton height={40} width="75%" style={{ marginLeft: '0.5rem' }} />
        </div>
      </SkeletonTheme>
    </div>
  )
}
