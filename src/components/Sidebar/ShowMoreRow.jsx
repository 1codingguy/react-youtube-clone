import { sideBarMenuRows } from './sidebarData';
import { SidebarRow } from "./SidebarRow";


export const ShowMoreRow = () => {
  const { Icon, text } = sideBarMenuRows.at(-1);
  return <SidebarRow {...{ Icon, text }} />;
};
