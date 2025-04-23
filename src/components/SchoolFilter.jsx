import { useState } from 'react';
import { TextField, Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

/**
 * defined the target school list, this will be the drop down list.
 * @constant {string}
 */
const allSchools = [
  "Stanford University", "Harvard University", "Massachusetts Institute of Technology", "University of Michigan",
  "University of California, Berkeley", "California Institute of Technology", "Princeton University", "Cornell University",
  "Columbia University", "Yale University", "Brown University", "Duke University", "Carnegie Mellon University",
  "University of Chicago", "University of Pennsylvania", "University of California, Los Angeles", "Northwestern University",
  "University of Southern California", "New York University", "University of Texas at Austin"
];

const SchoolFilter = ({ selectedSchools, setSelectedSchools }) => {

  /**
   * The user input string from the search field.
   * @type
   */
  const [input, setInput] = useState('');

    /**
   * Filters the list of all schools based on user input and excludes
   * schools that have already been selected.
   * @type
   */
    const filteredSchools = allSchools.filter(school => {
      // const isMatch = school.includes(input);
      const isMatch = school.toLowerCase().includes(input.toLowerCase());
        // const isNotSelected = true;
      const isNotSelected = !selectedSchools.includes(school);
      return isMatch && isNotSelected;
    });

    /**
   * Adds a selected school to the selectedSchools list and clear the input field.
   *
   * @function
   */
  const addSchool = (school) => {
    setSelectedSchools([...selectedSchools, school]);
    setInput('');
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3>
        Target Schools
      </h3>

      {/* changed these two blocks, TextField block and Paper block into MUI Style */}
      <TextField
        fullWidth
        label="Search schools"
        variant="outlined"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {input && filteredSchools.length > 0 && (
        <Paper sx={{ mt: 1, maxHeight: 200, overflowY: 'auto' }}>
          <List dense>
            {filteredSchools.map(school => (
              <ListItem disablePadding key={school}>
                <ListItemButton onClick={() => addSchool(school)}>
                  <ListItemText primary={school} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}


      {/* Display the selected schools */}
      <div style={{ marginTop: '0.5rem' }}>
        <strong>Selected:</strong> {selectedSchools.join(', ') || 'None'}
      </div>
    </div>
  );
};

export default SchoolFilter;


// import { useState } from 'react';

// const allSchools = [
//   "Stanford University", "Harvard University", "Massachusetts Institute of Technology", "University of Michigan",
//   "University of California, Berkeley", "California Institute of Technology", "Princeton University", "Cornell University",
//   "Columbia University", "Yale University", "Brown University", "Duke University", "Carnegie Mellon University",
//   "University of Chicago", "University of Pennsylvania", "University of California, Los Angeles", "Northwestern University",
//   "University of Southern California", "New York University", "University of Texas at Austin"
// ];

// const SchoolFilter = ({ selectedSchools, setSelectedSchools }) => {
//   const [inputList, setInputList] = useState(['']);

//   const handleChange = (value, index) => {
//     const updated = [...inputList];
//     updated[index] = value;
//     setInputList(updated);
//   };

//   const addSchool = (school, index) => {
//     if (!selectedSchools.includes(school)) {
//       setSelectedSchools([...selectedSchools, school]);
//     }
//     handleChange('', index);
//   };

//   const addInputField = () => {
//     setInputList([...inputList, '']);
//   };

//   return (
//     <div>
//       <h3>Target Schools</h3>
//       {inputList.map((input, index) => (
//         <div key={index} style={{ marginBottom: '0.5rem' }}>
//           <input
//             type="text"
//             placeholder="Type to search..."
//             value={input}
//             onChange={e => handleChange(e.target.value, index)}
//             list={`school-options-${index}`}
//           />
//           <datalist id={`school-options-${index}`}>
//             {allSchools
//               .filter(s => s.toLowerCase().includes(input.toLowerCase()))
//               .map(s => (
//                 <option key={s} value={s} onClick={() => addSchool(s, index)} />
//               ))}
//           </datalist>
//         </div>
//       ))}
//       <button onClick={addInputField}>Add School</button>
//       <div>Selected: {selectedSchools.join(', ')}</div>
//     </div>
//   );
// };

// export default SchoolFilter;


// 0422
// import { useState } from 'react';

// const allSchools = [
//   "Stanford University", "Harvard University", "Massachusetts Institute of Technology", "University of Michigan",
//   "University of California, Berkeley", "California Institute of Technology", "Princeton University", "Cornell University",
//   "Columbia University", "Yale University", "Brown University", "Duke University", "Carnegie Mellon University",
//   "University of Chicago", "University of Pennsylvania", "University of California, Los Angeles", "Northwestern University",
//   "University of Southern California", "New York University", "University of Texas at Austin"
// ];

// const SchoolFilter = ({ selectedSchools, setSelectedSchools }) => {
//   const [input, setInput] = useState('');
//   const filteredSchools = allSchools.filter(
//     s => s.toLowerCase().includes(input.toLowerCase()) && !selectedSchools.includes(s)
//   );

//   const addSchool = (school) => {
//     setSelectedSchools([...selectedSchools, school]);
//     setInput('');
//   };

//   return (
//     <div style={{ marginBottom: '1.5rem' }}>
//       <h3>Target Schools</h3>
//       <input
//         type="text"
//         placeholder="Search schools..."
//         value={input}
//         onChange={e => setInput(e.target.value)}
//       />
//       {input && filteredSchools.length > 0 && (
//         <ul style={{
//           border: '1px solid #ccc',
//           maxHeight: '120px',
//           overflowY: 'auto',
//           padding: 0,
//           margin: '0.5rem 0',
//           listStyle: 'none',
//           background: '#fff',
//           width: '300px'
//         }}>
//           {filteredSchools.map(school => (
//             <li key={school}
//                 onClick={() => addSchool(school)}
//                 style={{ padding: '6px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
//               {school}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div style={{ marginTop: '0.5rem' }}>
//         <strong>Selected:</strong> {selectedSchools.join(', ') || 'None'}
//       </div>
//     </div>
//   );
// };

// export default SchoolFilter;



