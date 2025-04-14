import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}%`;
}

export default function ScoreSlider({ minScore, setMinScore }) {
  const handleChange = (event, newValue) => {
    setMinScore(newValue);
  };

  return (
    <Box sx={{ width: 300, mt: 4 }}>
      <h3>Minimum Satisfaction Score: {minScore}</h3>
      <Slider
        aria-label="Satisfaction Score"
        defaultValue={minScore}
        value={minScore}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={85}
        max={100}
        onChange={handleChange}
      />
    </Box>
  );
}
