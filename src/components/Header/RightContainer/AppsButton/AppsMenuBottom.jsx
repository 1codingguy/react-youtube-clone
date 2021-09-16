import React from 'react';
import { menuItems } from './appsMenuData';
import { AppsMenuRow } from "./AppsMenuRow";

export const AppsMenuBottom = ({ onClick }) => {
  return menuItems.slice(3).map(({ Icon, text }) => {
    return <AppsMenuRow key={text} {...{ Icon, text, onClick }} />
  })
}
