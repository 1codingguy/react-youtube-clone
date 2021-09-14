import { sideBarMenuRows } from './sidebarData';
import { SidebarRow } from "./SidebarRow";


export const SidebarTopMenuSection2 = () => {
  return sideBarMenuRows.slice(3).map(({ Icon, text }) => {
    return <SidebarRow key={text} {...{ Icon, text }} />;
  });
};
