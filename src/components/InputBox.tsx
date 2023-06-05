import React, { useState } from 'react';
import { Box, Checkbox } from '@mui/material';
import AnimatedTextField from './AnimatedTextField';
import SaveButton from './SaveButton';

function InputBox() {
  const [typedText, setTypedText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // testing purposes rn
  const onClick = () => {
    console.log(typedText);
    setSubmitted(!submitted);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically
        height: '20%',
        mt: '7.5%',
      }}
    >
      <AnimatedTextField
        typedText={typedText}
        setTypedText={setTypedText}
        enabled={!submitted}
      />
      <SaveButton
        onClick={onClick}
        submitted={submitted}
      />
      <Checkbox disabled={!submitted} />
    </Box>
  );
}

export default InputBox;
