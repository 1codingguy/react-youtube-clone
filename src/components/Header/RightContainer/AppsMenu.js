import React from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import { DEFAULT_FONT_SIZE } from '../../utils/utils'
import { AppsMenuTop, AppsMenuMiddle, AppsMenuBottom } from './appsMenuData'

const AppsMenu = ({ anchorEl, handleClose }) => {
  return (
    <StyledAppsMenu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <AppsMenuTop onClick={handleClose} />
      <Divider />
      <AppsMenuMiddle onClick={handleClose} />
      <Divider />
      <AppsMenuBottom onClick={handleClose} />
    </StyledAppsMenu>
  )
}

export default AppsMenu

const StyledAppsMenu = styled(({ className, ...props }) => (
  <Menu
    {...props}
    classes={{ paper: className, list: 'list' }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    getContentAnchorEl={null}
    PaperProps={{ square: true }}
    transitionDuration={0}
    elevation={0}
  />
))`
  border: 1px solid #d3d4d5;
  border-top: 0;
  /* border-radius: 0; */

  .MuiTypography-body1 {
    font-size: ${DEFAULT_FONT_SIZE}px;
  }
`
