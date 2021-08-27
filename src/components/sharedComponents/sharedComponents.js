import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

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

export const YouTubeLogoContainer = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
`
