import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Box from '@material-ui/core/Box'

export const SHOW_SEARCH_BOX_WIDTH = '657px'

const useStylesLogo = makeStyles({
  tooltip: {
    backgroundColor: 'white',
    color: 'gray',
    border: '1px solid gray',
    fontSize: '0.8rem',
    padding: '0.2rem 0.4rem',
    border: '0.5px solid black',
    borderRadius: '2px',
  },
})

export function YouTubeLogoTooltip(props) {
  // `props` is necessary here, but why?
  const classes = useStylesLogo()

  return <Tooltip classes={classes} {...props} />
}

const useStylesIcons = makeStyles({
  tooltip: {
    backgroundColor: 'gray',
    color: 'white',
    border: '1px solid gray',
    fontSize: '0.8rem',
    padding: '0.4rem 0.4rem',
    border: '0.5px solid gray',
    borderRadius: '2px',
  },
})

export function IconTooltip(props) {
  // `props` is necessary here, but why?
  const classes = useStylesIcons()

  return <Tooltip classes={classes} {...props} />
}

// logo as a button so that it is keyboard-focusable
export const YouTubeLogoContainer = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
`

export const YouTubeLogo = styled.img`
  height: 20px;
  margin: auto 1rem;
  cursor: pointer;
`

export const StyledBox = styled(Box)`
  color: #030303;
  padding: ${(props) => props.padding};
  height: 100%;
  display: flex;
  align-items: center;

  /* doesn't work if StyledIconButton = styled(IconButton) */
  .MuiIconButton-root {
    padding: 8px;
  }
`
