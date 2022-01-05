import { SidebarMenuItem } from './FullWidthSidebar'
import { StyledListItemIcon } from '../../utils/utils'
import ListItemText from '@material-ui/core/ListItemText'
import { isSidebarDrawerOpenAtom } from '../../store'
import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

export const SidebarRow = ({ Icon, text, onClick }) => {
  const [, setIsSidebarDrawerOpen] = useAtom(isSidebarDrawerOpenAtom)

  const isHomeButton = text === 'Home'

  const handleClick = () => {
    // use the provided onClick function instead of default
    if (onClick) {
      onClick()
    } else {
      // default onClick function is to close the sidebar drawer
      setIsSidebarDrawerOpen(false)
    }
  }

  return (
    <SidebarMenuItem
      onClick={handleClick}
      component={isHomeButton ? Link : null}
      to={'/'}
    >
      <StyledListItemIcon>
        <Icon fontSize="medium" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </SidebarMenuItem>
  )
}
