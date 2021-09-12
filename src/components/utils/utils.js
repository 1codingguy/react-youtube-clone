import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'

// useScrollTrigger doesn't need "px" suffix
const MOBILE_VIEW_SCROLL_THRESHOLD = 48
export const MOBILE_VIEW_HEADER_HEIGHT = 48
export const DESKTOP_VIEW_HEADER_HEIGHT = 56
// Breakpoints
export const MOBILE_VIEW_BREAKPOINT = 428
export const SHOW_SEARCH_BOX_BREAKPOINT = 657
export const SHOW_MINI_SIDEBAR = 792
export const SHOW_FULL_SIDEBAR = 1313
// font size
export const DEFAULT_FONT_SIZE = 14

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
    <Slide in={showHeader}>
      {/* previously added wrap a <div> around {children, the hide animation didn't work as a result} */}
      {children}
    </Slide>
  )
}

// to be deleted after rewrite
// const useStylesLogo = makeStyles({
  //   tooltip: {
    //     backgroundColor: 'white',
    //     color: 'gray',
//     border: '1px solid gray',
//     fontSize: '0.8rem',
//     padding: '0.2rem 0.4rem',
//     // border: '0.5px solid black',
//     borderRadius: '2px',
//   },
// })

// // to be deleted after rewrite
// export function YouTubeLogoTooltip(props) {
  //   const classes = useStylesLogo()
  
  //   return <Tooltip classes={classes} {...props} />
  // }
  
  
// to be deleted after rewrite
// const useStylesIcons = makeStyles({
  //   tooltip: {
    //     backgroundColor: 'gray',
    //     color: 'white',
    //     border: '1px solid gray',
    //     fontSize: '0.8rem',
//     padding: '0.4rem 0.4rem',
//     // border: '0.5px solid gray',
//     borderRadius: '2px',
//   },
// })

// to be deleted after rewrite
// export function OldIconTooltip(props) {
//   // `props` is necessary here, but why?
//   const classes = useStylesIcons()

//   return <Tooltip classes={classes} {...props} />
// }

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

// logo as a button so that it is keyboard-focusable
// export const YouTubeLogoContainer = styled.button`
//   border: none;
//   background-color: transparent;
//   height: 100%;
// `

// export const YouTubeLogo = styled.img`
//   @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
//     margin: auto 1rem;
//   }
//   height: 20px;
//   cursor: pointer;
//   margin: auto 16px;
// `
// StyledBox to be deleted after rewrite
export const StyledBox = styled(Box)`
  color: #030303;
  /* padding: ${(props) => props.padding}; */
  height: 100%;
  display: flex;
  align-items: center;

  /* doesn't work if StyledIconButton = styled(IconButton) */
  .MuiIconButton-root {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
      padding: 12px;
    }
    padding: 8px;
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
