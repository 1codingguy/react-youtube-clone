import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

// heights and widths of components
const MOBILE_VIEW_SCROLL_THRESHOLD = 48
export const NOTIFICATION_MENU_TOP_HEIGHT = 48
export const MOBILE_VIEW_HEADER_HEIGHT = 48
export const DESKTOP_VIEW_HEADER_HEIGHT = 56
export const MINI_SIDEBAR_WIDTH = 72
export const FULL_SIDEBAR_WIDTH = 240
// Breakpoints
export const MOBILE_VIEW_BREAKPOINT = 428
export const SHOW_SEARCH_BOX_BREAKPOINT = 657
export const SHOW_MINI_SIDEBAR = 792
export const SHOW_FULL_SIDEBAR = 1313
// font size
export const DEFAULT_FONT_SIZE = 14

// useMediaQuery hooks
export const useIsMobileView = () =>
  useMediaQuery(`(max-width: ${MOBILE_VIEW_BREAKPOINT}px)`)

export const useShouldOpenSidebarDrawer = () =>
  !useMediaQuery(`(min-width:${SHOW_FULL_SIDEBAR}px)`)

export const useMinWidthToShowFullSidebar = () =>
  useMediaQuery(`(min-width: ${SHOW_FULL_SIDEBAR}px)`)

export const useShouldShowMiniSidebar = () =>
  useMediaQuery(`(min-width: ${SHOW_MINI_SIDEBAR}px)`)

export function HideOnScroll({ children }) {
  const displayMobileHeader = !useScrollTrigger({
    threshold: MOBILE_VIEW_SCROLL_THRESHOLD,
  })

  const displayDesktopHeader = !useMediaQuery(
    `(max-width:${MOBILE_VIEW_BREAKPOINT}px)`
  )
  // always show Header in desktop view
  const showHeader = displayDesktopHeader
    ? displayDesktopHeader
    : displayMobileHeader

  return (
    // previously added wrap a <div> around {children, the hide animation didn't work as a result}
    <Slide in={showHeader}>{children}</Slide>
  )
}

// Tooltip styling for all IconButton, expect YouTube logo
export const IconTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  .MuiTooltip-tooltip {
    background: gray;
    color: white;
    border: 1px solid gray;
    font-size: 0.8rem;
    padding: 0.4rem 0.4rem;
    border-radius: 2px;
  }
`
// common settings of padding for all IconButton
export const StyledIconButton = styled(IconButton)`
  && {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
      padding: 12px;
    }
    padding: 8px;
  }
`
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
