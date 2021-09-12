import React from 'react'
import { MOBILE_VIEW_HEADER_HEIGHT, DESKTOP_VIEW_HEADER_HEIGHT } from './utils'

export function textForScrollingTest(isMobileView) {
  return (
    <div
      style={{
        paddingTop: `${
          isMobileView ? MOBILE_VIEW_HEADER_HEIGHT : DESKTOP_VIEW_HEADER_HEIGHT
        }px`,
      }}
    >
      {[...new Array(100)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </div>
  )
}
