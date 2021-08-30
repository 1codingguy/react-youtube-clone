import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// Will be needed after successful refactor
import ListItemText from '@material-ui/core/ListItemText'

// Deleted after successful refactor
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

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

// const CustomMenuItem = () => (
//   <StyledMenuItem>
//     <StyledListItemIcon>
//       <PlayArrowIcon fontSize="small" />
//     </StyledListItemIcon>
//     <ListItemText primary="Upload video" />
//   </StyledMenuItem>
// )

// export default CustomMenuItem

const CustomListItem = ({Icon, fontSize='default', text='', arrow=false}) => {
  return (
    <>
      <StyledListItemIcon>
        <Icon fontSize={fontSize} />
      </StyledListItemIcon>
      <ListItemText primary={text} />
      {arrow && <ChevronRightIcon />}
    </>
  )
}

export default CustomListItem
