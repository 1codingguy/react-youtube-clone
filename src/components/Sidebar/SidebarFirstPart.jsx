import React from 'react'
import { SidebarTopMenuSection1, SidebarTopMenuSection2 } from './sidebarData'
import { DividerWithMargin } from './FullWidthSidebar'

export const SidebarFirstPart = () => {

  return (
    <div style={{ padding: '12px 0' }}>
      <SidebarTopMenuSection1  />
      <DividerWithMargin />
      <SidebarTopMenuSection2  />
    </div>
  )
}
