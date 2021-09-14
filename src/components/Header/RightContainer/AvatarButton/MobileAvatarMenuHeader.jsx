import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { useGlobalContext } from '../../../../context'

export const MobileAvatarMenuHeader = () => {
  const { handleRightContainerMenusClose } = useGlobalContext()
  return (
    <MobileHeaderContainer square={true}>
      <CloseMobileMenuButton onClick={handleRightContainerMenusClose} />
      <Typography>Account</Typography>
    </MobileHeaderContainer>
  )
}

const CloseMobileMenuButton = styled(CloseOutlinedIcon)`
  cursor: pointer;
  margin: 8px;
  margin-right: 32px;
`
const MobileHeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 6px 4px;
  min-height: 52px;
`
