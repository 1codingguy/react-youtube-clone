import { menuArray } from './avatarMenuData';
import { MenuRow } from './MenuRow'


export const AvatarMenuTop = ({onClick}) => {
  return menuArray.slice(0, 5).map(({ Icon, text, arrow }) => {
    return <MenuRow key={text} {...{ Icon, text, arrow, onClick }} />
  });
};
