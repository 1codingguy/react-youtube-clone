import { SidebarMenuItem } from './FullWidthSidebar'
import { StyledListItemIcon } from '../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'

export const SidebarRow = ({ Icon, text, onClick }) => {
  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      setIsSidebarDrawerOpen(false)
    }
  }

  return (
    <SidebarMenuItem onClick={handleClick}>
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </SidebarMenuItem>
  )
}
