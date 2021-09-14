import { moreFromYouTubeRows } from './sidebarData';
import { SidebarRow } from "./SidebarRow";


export const MoreFromYouTubeSection1 = () => {
  return moreFromYouTubeRows.slice(0, 4).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />;
  });
};
