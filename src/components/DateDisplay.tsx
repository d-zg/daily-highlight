import React from 'react';

import { Typography, Box } from '@mui/material';

function DateDisplay() {
  const currentDate = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: 46 }}>
        It is
        {' '}
        {dayOfWeek}
        ,
        {' '}
        {month}
        {' '}
        {day}
        ,
        {' '}
        <Typography variant="h2" component="span" sx={{ fontSize: 12 }}>
          {year.toString().toLowerCase()}
        </Typography>
      </Typography>
    </Box>
  );
}

export default DateDisplay;
