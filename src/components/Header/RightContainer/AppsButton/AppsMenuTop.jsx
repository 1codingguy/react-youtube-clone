import React from 'react';
import { menuItems } from './appsMenuData';
import { AppsMenuRow } from "./AppsMenuRow";

export const AppsMenuTop = ({onClick}) => {
  return menuItems.slice(0, 1).map(({ Icon, text }) => {
    return <AppsMenuRow key={text} {...{ Icon, text, onClick }} />
  });
};
