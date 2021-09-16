import { SidebarMenuItem } from './FullWidthSidebar'
import { StyledListItemIcon } from '../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'
import { useGlobalContext } from '../../context'

export const SidebarRow = ({ Icon, text }) => {
  const { setIsSidebarDrawerOpen } = useGlobalContext()

  return (
    <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </SidebarMenuItem>
  )
}
