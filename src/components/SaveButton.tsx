import React from 'react';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function SaveButton({ onClick, submitted } : any) {
  if (submitted) {
    return (
      <div className="save-button">
        <IconButton onClick={onClick}>
          <ModeEditIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <div className="save-button">
      <IconButton onClick={onClick}>
        <CheckIcon />
      </IconButton>
    </div>
  );
}

export default SaveButton;
