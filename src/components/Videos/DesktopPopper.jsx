import React from 'react'
import {
  ClickAwayListener,
  MenuList,
  Paper,
  Popper,
  Divider,
} from '@material-ui/core'
import { PopperMenuTop } from './PopperMenuTop'
import { PopperMenuBottom } from './PopperMenuBottom'

export const DesktopPopper = ({
  isPopupOpen,
  anchorRef,
  handlePopupClose,
  handleListKeyDown,
}) => {
  return (
    <Popper
      open={isPopupOpen}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
    >
      <Paper>
        <ClickAwayListener onClickAway={handlePopupClose}>
          <MenuList
            dense
            autoFocusItem={isPopupOpen}
            onKeyDown={handleListKeyDown}
          >
            <PopperMenuTop onClick={handlePopupClose} />
            <Divider style={{ margin: '6px 0' }} />
            <PopperMenuBottom onClick={handlePopupClose} />
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  )
}
