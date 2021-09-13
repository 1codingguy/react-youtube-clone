import React from 'react';
import {
  SidebarTopMenuSection1,
  SidebarTopMenuSection2
} from './sidebarData';
import { DividerWithMargin } from './FullWidthSidebar';

export const SidebarFirstPart = ({ onClick }) => {
  return (
    <div style={{ padding: '12px 0' }}>
      <SidebarTopMenuSection1 onClick={onClick} />
      <DividerWithMargin />
      <SidebarTopMenuSection2 onClick={onClick} />
    </div>
  );
};
