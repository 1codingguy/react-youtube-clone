import React, { useState } from 'react'
import { StyledIconButton } from '../../../utils/utils'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { MobileModal } from '../../Videos/MobileModal'

export const HeaderMoreButton = () => {
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false)
  const handleHeaderModalClose = () => setIsHeaderModalOpen(false)

  return (
    <StyledIconButton>
      <MoreVertIcon onClick={() => setIsHeaderModalOpen(true)} />

      <MobileModal
        isModalOpen={isHeaderModalOpen}
        handleModalClose={handleHeaderModalClose}
        isMobileHeaderMoreButton={true}
      />
    </StyledIconButton>
  )
}
