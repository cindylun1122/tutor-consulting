// function TimeSlider({ selectedHours, setSelectedHours }) {
//   const [start, end] = selectedHours;

//   return (
//     <div>
//       <h3>Available Hours: {start}:00 to {end}:00</h3>
//       <label>Start Time:</label>
//       <input
//         type="range"
//         min="8"
//         max="21"
//         value={start}
//         onChange={(e) => setSelectedHours([Number(e.target.value), end])}
//       />
//       <label>End Time:</label>
//       <input
//         type="range"
//         min="9"
//         max="22"
//         value={end}
//         onChange={(e) => setSelectedHours([start, Number(e.target.value)])}
//       />
//     </div>
//   );
// }

// export default TimeSlider;

import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour < 22; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  slots.push(`22:00`);
  return slots;
};

const TimeSelector = ({ selectedSlots, setSelectedSlots }) => {
  const timeSlots = generateTimeSlots();

  const toggleSlot = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Select Available Time (like When2Meet)
      </Typography>
      <Grid container spacing={1} sx={{ maxWidth: 520 }}>
        {timeSlots.map(slot => (
          <Grid item key={slot}>
            <Button
              variant={selectedSlots.includes(slot) ? 'contained' : 'outlined'}
              onClick={() => toggleSlot(slot)}
              sx={{ minWidth: 70, fontSize: '0.75rem', padding: '4px 8px' }}
            >
              {slot}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          <strong>Selected Slots:</strong> {selectedSlots.join(', ') || 'None'}
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeSelector;