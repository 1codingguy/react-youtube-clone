import React from 'react'
import styled from 'styled-components'
import Menu from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import { DEFAULT_FONT_SIZE } from '../../../utils/utils'
import { AppsMenuTop } from './AppsMenuTop'
import { AppsMenuBottom } from './AppsMenuBottom'
import { AppsMenuMiddle } from './AppsMenuMiddle'
import { useGlobalContext } from '../../../../context'

const AppsMenu = () => {
  const { anchorAppsButton, handleRightContainerMenusClose } =
    useGlobalContext()

  return (
    <StyledAppsMenu
      anchorEl={anchorAppsButton}
      open={Boolean(anchorAppsButton)}
      onClose={handleRightContainerMenusClose}
    >
      <AppsMenuTop />
      <Divider />
      <AppsMenuMiddle />
      <Divider />
      <AppsMenuBottom />
    </StyledAppsMenu>
  )
}

export default AppsMenu

const StyledAppsMenu = styled(({ className, ...props }) => (
  <Menu
    {...props}
    classes={{ paper: className }}
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
