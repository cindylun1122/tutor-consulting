import { useState } from 'react';

const allSchools = [
  "Stanford University", "Harvard University", "Massachusetts Institute of Technology", "University of Michigan",
  "University of California, Berkeley", "California Institute of Technology", "Princeton University", "Cornell University",
  "Columbia University", "Yale University", "Brown University", "Duke University", "Carnegie Mellon University",
  "University of Chicago", "University of Pennsylvania", "University of California, Los Angeles", "Northwestern University",
  "University of Southern California", "New York University", "University of Texas at Austin"
];

function SchoolFilter({ selectedSchools, setSelectedSchools }) {
  const [inputList, setInputList] = useState(['']);

  const handleChange = (value, index) => {
    const updated = [...inputList];
    updated[index] = value;
    setInputList(updated);
  };

  const addSchool = (school, index) => {
    if (!selectedSchools.includes(school)) {
      setSelectedSchools([...selectedSchools, school]);
    }
    handleChange('', index);
  };

  const addInputField = () => {
    setInputList([...inputList, '']);
  };

  return (
    <div>
      <h3>Target Schools</h3>
      {inputList.map((input, index) => (
        <div key={index} style={{ marginBottom: '0.5rem' }}>
          <input
            type="text"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value, index)}
            list={`school-options-${index}`}
          />
          <datalist id={`school-options-${index}`}>
            {allSchools
              .filter(s => s.toLowerCase().includes(input.toLowerCase()))
              .map(s => (
                <option key={s} value={s} onClick={() => addSchool(s, index)} />
              ))}
          </datalist>
        </div>
      ))}
      <button onClick={addInputField}>Add School</button>
      <div>Selected: {selectedSchools.join(', ')}</div>
    </div>
  );
}

export default SchoolFilter;
