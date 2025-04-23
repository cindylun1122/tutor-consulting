
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

/**
 * @function
 *borrow this part from MUI SmallStepSlider sample
 */
const valuetext = (value) => `${value}%`;

/**
 * A slider component for setting the minimum tutor satisfaction score.
 */
const ScoreSlider = ({ minScore, setMinScore }) => {
  /**
   * @function
   * Handles slider value change and updates the parent state.
   */
  const handleChange = (event, newValue) => {
    setMinScore(newValue);
  };

/**
 @return *borrow this part from MUI SmallStepSlider sample
 */
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
};

export default ScoreSlider;