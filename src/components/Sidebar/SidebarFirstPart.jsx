import React from 'react'
import { SidebarTopMenuSection2 } from "./SidebarTopMenuSection2"
import { SidebarTopMenuSection1 } from "./SidebarTopMenuSection1"
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
