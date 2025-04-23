import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

/**
 * Generates a list of 30-minute time slots between 8:00 and 22:00.
 *
 * @function
 * @returns An array of time slots
 */
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour < 22; hour++) {
    slots.push(`${hour}:00`); //add elements to the array
    slots.push(`${hour}:30`);
  }
  slots.push(`22:00`);
  return slots;
};

/**
 * A component that allows users to select their available time slots.
 * Users can toggle buttons to select or deselect 30-minute intervals.
 */
const TimeSelector = ({ selectedSlots, setSelectedSlots }) => {
  const timeSlots = generateTimeSlots();

   /**
   * Toggles a time slot in or out of the selectedSlots array.
   */
  const toggleSlot = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  /* change from MUI to make it consistent with other components */
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Available Time
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
    </Box>
  );
};

export default TimeSelector;
