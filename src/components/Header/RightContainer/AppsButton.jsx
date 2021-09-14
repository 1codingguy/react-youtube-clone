import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import { StyledIconButton, IconTooltip } from '../../utils/utils'
import { useGlobalContext } from '../../../context'

function AppsButton() {
  const { setAnchorAppsButton } = useGlobalContext()

  return (
    <IconTooltip title="YouTube Apps">
      <StyledIconButton
        onClick={(event) => setAnchorAppsButton(event.currentTarget)}
      >
        <AppsIcon />
      </StyledIconButton>
    </IconTooltip>
  )
}

export default AppsButton
