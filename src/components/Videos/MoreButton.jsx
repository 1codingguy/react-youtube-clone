import React, { useState, useRef } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { StyledIconButton } from './VideoCard'
import { useIsMobileView } from '../../utils/utils'
import { MobileModal } from './MobileModal'
import { DesktopPopper } from './DesktopPopper'

export const MoreButton = ({ isSearchPage }) => {
  const isMobileView = useIsMobileView()
  // states for Modal in mobile view
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModalClose = () => setIsModalOpen(false)

  // states for popup menu in desktop view
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const anchorRef = useRef(null)

  const handlePopupClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setIsPopupOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setIsPopupOpen(false)
    }
  }

  // what is triggered onClick depends on the view
  const handleMoreIconClick = () => {
    if (isMobileView) {
      setIsModalOpen(true)
    } else {
      // toggle if desktop view
      setIsPopupOpen((prevOpen) => !prevOpen)
    }
  }

  return (
    <StyledIconButton disableRipple={true}>
      <MoreVertIcon
        ref={anchorRef}
        onClick={handleMoreIconClick}
        style={{ color: 'rgb(144, 144, 144)' }}
      />

      {/* desktop view popper */}
      <DesktopPopper
        {...{ isPopupOpen, anchorRef, handlePopupClose, handleListKeyDown }}
      />

      {/* mobile view modal */}
      <MobileModal {...{ isModalOpen, handleModalClose, isSearchPage }} />
    </StyledIconButton>
  )
}
