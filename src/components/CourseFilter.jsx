/**
 The entire code is first copy from MUI MultipleSelectChip sample and I checked the code from line to line
 */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

/**
 * Replaces names from MUI demo to list of available course subjects.
 */
const subjects = [
  "Math", "Physics", "Chemistry", "English", "Spanish",
  "History", "Biology", "Geography"
];

/**
 * @param *Change the parameter PersonNames to electedCourses
 */
const getStyles = (name, selectedCourses, theme) => ({
  fontWeight: selectedCourses.includes(name)
    ? theme.typography.fontWeightMedium
    : theme.typography.fontWeightRegular,
});

/**
 * A multi-select component that lets users choose from a list of courses
 *  adapted from the MUI MultipleSelectChip example.
 */
const CourseFilter = ({ selectedCourses, setSelectedCourses }) => {
  const theme = useTheme();

  /**
   * Updates the selected courses state based on user input.
   */
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedCourses(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box sx={{ m: 2, width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="course-multiselect-label">Courses</InputLabel>
        <Select
          labelId="course-multiselect-label"
          id="course-multiselect"
          multiple
          value={selectedCourses}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Courses" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {subjects.map((subject) => (
            <MenuItem
              key={subject}
              value={subject}
              style={getStyles(subject, selectedCourses, theme)}
            >
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CourseFilter;

// import React from 'react';

// const subjects = ["Math", "Physics", "Chemistry", "English", "Spanish", "History", "Biology", "Geography"];

// const CourseFilter = ({ selectedCourses, setSelectedCourses }) => {
//   const toggleCourse = (subject) => {
//     const isSelected = selectedCourses.includes(subject);

//     if (isSelected) {
//       const updated = selectedCourses.filter(s => s !== subject); // remove it
//       setSelectedCourses(updated);
//     } else {
//       const updated = [...selectedCourses, subject]; // add it
//       setSelectedCourses(updated);
//     }
//   };
// };

//   return (
//     <div>
//       <h3>Courses</h3>
//       {subjects.map(subject => (
//         <label key={subject} style={{ marginRight: '10px' }}>
//           <input
//             type="checkbox"
//             checked={selectedCourses.includes(subject)}
//             onChange={() => toggleCourse(subject)}
//           />
//           {subject}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default CourseFilter;