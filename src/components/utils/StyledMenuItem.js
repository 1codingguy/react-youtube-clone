import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

export const StyledMenuItem = styled(MenuItem)`
  && {
    padding-top: 8px;
    padding-bottom: 8px;
    min-height: 40px;
  }
`

// The icon on the left of each list item
export const StyledListItemIcon = styled(ListItemIcon)`
  && {
    min-width: 0;
    margin-right: 16px;
  }
`