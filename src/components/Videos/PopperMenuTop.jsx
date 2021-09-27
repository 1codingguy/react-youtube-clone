import React from 'react'
import { moreButtonMenuArray } from './moreButtonMenuArray'
import { PopperRow } from './PopperRow'

export const PopperMenuTop = ({ onClick }) => {
  return moreButtonMenuArray.slice(0, 3).map(({ Icon, text }, ind) => {
    return <PopperRow key={`${ind}-${text}`} {...{ Icon, text, onClick }} />
  })
}
