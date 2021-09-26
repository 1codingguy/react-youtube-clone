import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { StyledIconButton } from './VideoCard'
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import { useIsMobileView } from '../utils/utils'
import { List, ListItem, Typography } from '@material-ui/core'

export const MoreButton = () => {
  const isMobileView = useIsMobileView()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleMoreIconClick = () => {
    if (isMobileView) {
      setIsModalOpen(true)
    }
  }
  const handleModalClose = () => setIsModalOpen(false)

  return (
    <StyledIconButton disableRipple={true}>
      <MoreVertIcon onClick={handleMoreIconClick} />
      <MobileModal {...{ isModalOpen, handleModalClose }} />
    </StyledIconButton>
  )
}

const StyledListItem = styled(ListItem)`
  && {
    padding: 9px 12px;
    color: #030303;
    cursor: pointer;
  }
`

const MobileModalMenu = ['Not interested', 'Save to Watch Later', 'Cancel']

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  max-width: 356px;
  max-height: 100%;
  background-color: rgb(249, 249, 249);
`
const MobileModal = ({ isModalOpen, handleModalClose }) => {
  return (
    <Modal open={isModalOpen} onClose={handleModalClose}>
      <ModalContainer>
        <List>
          {MobileModalMenu.map((item) => {
            return (
              <StyledListItem key={item} onClick={handleModalClose}>
                {/* add a <ListItemText /> here renders nothing for unknown reason  */}
                <Typography variant="body1">{item}</Typography>
              </StyledListItem>
            )
          })}
        </List>
      </ModalContainer>
    </Modal>
  )
}
