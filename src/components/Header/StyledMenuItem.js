import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

export const StyledMenuItem = withStyles({
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
    minHeight: '40px',
  },
  gutters: {
    paddingRight: '32px',
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
}) => {
  return (
    <>
      <StyledListItemIcon>
        <Icon fontSize={fontSize} />
      </StyledListItemIcon>
      <ListItemText primary={text} />

      {/* The optional arrow at flex-end */}
      {arrow && <ChevronRightIcon />}
    </>
  )
}
