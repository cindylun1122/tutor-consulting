// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' agsg

// function App() {
//   const [count, setCount] = useState(1)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import tutors from './tutors';
import CourseFilter from './components/CourseFilter';
import ScoreSlider from './components/ScoreSlider';
import SchoolFilter from './components/SchoolFilter';
import TimeSlider from './components/TimeSlider';
import TutorList from './components/TutorList';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [minScore, setMinScore] = useState(85);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedHours, setSelectedHours] = useState([8, 22]); // time range in 24hr

  const filteredTutors = tutors.filter(tutor => {
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.some(c => tutor.course.includes(c));
    const matchesScore = tutor.satisfaction_score >= minScore;
    const matchesSchool = selectedSchools.length === 0 || selectedSchools.some(school =>
      tutor.target_school.includes(school)
    );
    const matchesTime = tutor.available_time_slot.some(slot => {
      const [start] = slot.split('-').map(t => parseInt(t.split(':')[0]));
      return start >= selectedHours[0] && start <= selectedHours[1];
    });

    return matchesCourse && matchesScore && matchesSchool && matchesTime;
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Tutor Consult</h1>
      <CourseFilter selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
      <ScoreSlider minScore={minScore} setMinScore={setMinScore} />
      <SchoolFilter selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools} />
      <TimeSlider selectedHours={selectedHours} setSelectedHours={setSelectedHours} />
      <TutorList tutors={filteredTutors} />
    </div>
  );
}

export default App;
