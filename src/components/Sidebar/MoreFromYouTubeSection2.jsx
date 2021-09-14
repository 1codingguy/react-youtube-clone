import { moreFromYouTubeRows } from './sidebarData';
import { SidebarRow } from "./SidebarRow";


export const MoreFromYouTubeSection2 = () => {
  return moreFromYouTubeRows.slice(4).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />;
  });
};
