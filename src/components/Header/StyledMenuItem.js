import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'

export const StyledMenuItem = withStyles({
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
    minHeight: '40px',
  },
  gutters: {
    // should be 16px or 32px?
    paddingRight: '16px',
  },
})(MenuItem)

// The icon on the left of each list item
export const StyledListItemIcon = withStyles({
  root: {
    minWidth: '0',
    marginRight: '16px',
  },
})(ListItemIcon)

// ListItem = Icon + Text + optional arrow on the right
export const StyledListItem = ({
  Icon,
  fontSize = 'small',
  text = '',
  arrow = false,
  iconStyle,
}) => {
  return (
    <>
      <StyledListItemIcon style={iconStyle}>
        <Icon fontSize={fontSize} />
      </StyledListItemIcon>
      <ListItemText primary={text} />

      {/* The optional arrow at flex-end, original icon is 24px, but since the icon is a bit bolder, I adjust the font-size to 20px */}
      {arrow && <ChevronRightIcon style={{ fontSize: '20px' }} />}
    </>
  )
}

export function addMenuChunk(
  dataArray,
  MenuItemComponent,
  handleClose = undefined,
  menuItemStyle = undefined,
  listItemFontSize = undefined,
  listItemIconStyle = undefined
) {
  // closure, after calling addMenuChunk with the required parameters for the first time, returns a function that only requires start and end indices, so that those parameters don't have to be repeated.
  return (startIndex, endIndex) => {
    return dataArray
      .slice(startIndex, endIndex)
      .map(({ Icon, text, arrow }) => (
        <MenuItemComponent
          key={text}
          onClick={handleClose}
          style={menuItemStyle}
        >
          <StyledListItem
            Icon={Icon}
            text={text}
            arrow={arrow}
            fontSize={listItemFontSize}
            iconStyle={listItemIconStyle}
          />
        </MenuItemComponent>
      ))
  }
}
