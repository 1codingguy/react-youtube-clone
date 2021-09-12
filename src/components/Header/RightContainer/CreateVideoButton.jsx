import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {
  IconTooltip,
  StyledIconButton
} from '../../utils/utils';

function CreateVideoButton({ setAnchorVideoButton }) {
  return (
    <IconTooltip title="Create">
      <StyledIconButton
        onClick={(event) => setAnchorVideoButton(event.currentTarget)}
      >
        <VideoCallIcon />
      </StyledIconButton>
    </IconTooltip>
  );
}

export default CreateVideoButton