import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'


export const CustomMenuItem = withStyles({
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  gutters: {
    paddingRight: '32px',
  },
})(MenuItem)

export const CustomListItemIcon = withStyles({
  root: {
    minWidth: '0',
    marginRight: '16px',
  },
})(ListItemIcon)

const StyledMenuItem = ({ Icon, fontSize = 'default', text = '', arrow=false }) => {
  return (
    <CustomMenuItem>
      <CustomListItemIcon>
        <Icon fontSize={fontSize} />
      </CustomListItemIcon>
      <ListItemText primary={text} />

      {/* The optional arrow at flex-end */}
      {arrow && <ChevronRightIcon />}
    </CustomMenuItem>
  )
}

export default StyledMenuItem
