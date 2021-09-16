import { SidebarMenuItem } from './FullWidthSidebar'
import { StyledListItemIcon } from '../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

export const SidebarRow = ({ Icon, text }) => {
  const [_, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)

  return (
    <SidebarMenuItem onClick={() => setIsSidebarDrawerOpen(false)}>
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </SidebarMenuItem>
  )
}
