import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function AnimatedTextField({ typedText, setTypedText, enabled } : any) {
  // const [typedText, setTypedText] = useState('');
  const [label, setLabel] = useState(false);
  const placeholderText = 'What do you want to do today?';
  const typingSpeed = 25; // Adjust the typing speed as needed

  useEffect(() => {
    let timeoutId : any;

    const typeText = (text : any, currentIndex : any) => {
      if (currentIndex < text.length) {
        setTypedText(text.substring(0, currentIndex + 1));
        timeoutId = setTimeout(() => {
          typeText(text, currentIndex + 1);
        }, typingSpeed);
      }
    };

    typeText(placeholderText, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleInputChange = (event : any) => {
    setTypedText(event.target.value);
  };

  const handleInputFocus = () => {
    if (typedText === placeholderText) {
      setTypedText('');
      setLabel(true);
    }
  };
  if (!enabled) {
    return (
      <div className="animated-text-field">
        <TextField
          label={label ? 'Start doing!' : ''}
          variant="outlined"
          disabled
          InputLabelProps={{ shrink: true }}
          value={typedText}
          sx={{
            width: '500px',
          }}
        />
      </div>
    );
  }
  return (
    <div className="animated-text-field">
      <TextField
        label={label ? 'What do you want to do today?' : ''}
        variant="standard"
        InputLabelProps={{ shrink: true }}
        value={typedText}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        sx={{
          width: '500px',
        }}
      />
    </div>
  );
}

export default AnimatedTextField;
