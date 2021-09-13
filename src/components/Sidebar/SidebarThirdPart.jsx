import React from 'react';
import {
  MoreFromYouTubeSection1,
  MoreFromYouTubeSection2
} from './sidebarData';
import { SubHeading, DividerWithMargin } from './FullWidthSidebar';

export const SidebarThirdPart = ({ onClick }) => {
  return (
    <>
      <SubHeading>MORE FROM YOUTUBE</SubHeading>
      <MoreFromYouTubeSection1 onClick={onClick} />
      <DividerWithMargin />
      <MoreFromYouTubeSection2 onClick={onClick} />
      <DividerWithMargin />
    </>
  );
};
