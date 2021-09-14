import React from 'react'
import { MoreFromYouTubeSection1, MoreFromYouTubeSection2 } from './sidebarData'
import { SubHeading, DividerWithMargin } from './FullWidthSidebar'

export const SidebarThirdPart = () => {
  return (
    <>
      <SubHeading>MORE FROM YOUTUBE</SubHeading>
      <MoreFromYouTubeSection1 />
      <DividerWithMargin />
      <MoreFromYouTubeSection2 />
      <DividerWithMargin />
    </>
  )
}
