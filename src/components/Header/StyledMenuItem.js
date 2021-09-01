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
  },
  gutters: {
    paddingRight: '32px',
  },
})(MenuItem)

export const StyledListItemIcon = withStyles({
  root: {
    minWidth: '0',
    marginRight: '16px',
  },
})(ListItemIcon)

export const StyledListItem = ({
  Icon,
  fontSize = 'small',
  text = '',
  arrow = false,
  iconColor,
  src
}) => {
  return (
    <>
      <StyledListItemIcon>
        <Icon fontSize={fontSize} style={iconColor} src={src}/>
      </StyledListItemIcon>
      <ListItemText primary={text} />

      {/* The optional arrow at flex-end */}
      {arrow && <ChevronRightIcon />}
    </>
  )
}
