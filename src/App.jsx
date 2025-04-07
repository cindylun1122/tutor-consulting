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
import tutors from './tutors.js';

function App() {
  const [filter, setFilter] = useState('');

  const mathCourses = ['SI508', 'SI501', 'SI506'];
  const programmingCourses = ['SI507', 'SI539', 'SI544', 'SI649', 'SI650', 'SI579', 'SI699', 'SI612', 'SI664', 'SI582'];
  const courseList = filter === 'math' ? mathCourses : filter === 'programming' ? programmingCourses : [];

  const filteredTutors = filter
    ? tutors.filter(tutor => tutor.course.some(course => courseList.includes(course)))
    : tutors;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Tutor Consult</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('math')}>Math Tutors</button>
        <button onClick={() => setFilter('programming')}>Programming Tutors</button>
        <button onClick={() => setFilter('')}>All Tutors</button>
      </div>
      <ul>
        {filteredTutors.map((tutor, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <strong>{tutor.name}</strong><br />
            Courses: {tutor.course.join(', ')}<br />
            Languages: {Object.entries(tutor.languages).map(([lang, level]) => `${lang} (${level})`).join(', ')}<br />
            Patience: {tutor.patience}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
