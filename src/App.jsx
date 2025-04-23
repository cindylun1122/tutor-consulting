import { useState } from 'react';
import { tutors } from './tutors';
import CourseFilter from './components/CourseFilter';
import ScoreSlider from './components/ScoreSlider';
import SchoolFilter from './components/SchoolFilter';
import TimeSelector from './components/TimeSelector';
import TutorList from './components/TutorList';
import WishList from './components/WishList';

/**
 * This is the part that controls the logic between the filters and the results.
 * This file also holds filter controls on the left and a filtered list of tutors on the right,
 * along with a wishlist section.
 */

/** @type */
const App = () => {
  /** Selected courses*/
  const [selectedCourses, setSelectedCourses] = useState([]);

  /** Minimum satisfaction score, minScore is Number*/
  const [minScore, setMinScore] = useState(85);

  /** Target schools */
  const [selectedSchools, setSelectedSchools] = useState([]);

  /** available time slots */
  const [selectedSlots, setSelectedSlots] = useState([]);

  /** Wishlist of tutors, wishList is objact */
  const [wishList, setWishList] = useState([]);

  /**
   * Filters the list of tutors based on user-selected filters.
   *
   * @function
   * length === 0 enables that if no item is selected, they automatically pass
   * In order to avoid to many if else, I used chatgpt for help, search online and understand the methods
   * .some() to Returns true if at least one element in the array passes the test.
   * I used .includes to checks if a specific value exists in the array
   */
  const filteredTutors = tutors.filter(tutor => {
    // const matchesCourse = selectedCourses.some(c => tutor.course.includes(c));
    // const matchesCourse = tutor.course.includes(selectedCourses[0]);
    const matchesCourse =
      selectedCourses.length === 0 || selectedCourses.some(c => tutor.course.includes(c));
    const matchesScore = tutor.satisfaction_score > minScore;
    const matchesSchool =
      selectedSchools.length === 0 || selectedSchools.some(school =>
        tutor.target_school.includes(school)
      );
    // const matchesTime = selectedSlots.some(slot => tutor.available_time_slot.includes(slot));
    // const matchesTime = tutor.available_time_slot.some(slot => selectedSlots.includes(slot));
    const matchesTime =
      selectedSlots.length === 0 ||
      tutor.available_time_slot.some(slot => selectedSlots.includes(slot.split('-')[0]));

    return matchesCourse && matchesScore && matchesSchool && matchesTime;
  });

  /**
   * Toggles the tutor in the wishlist.
   * @function
   */
  const toggleWish = (tutor) => {
    if (wishList.includes(tutor)) {
      // create a new array without that tutor and update the state to this new array
      setWishList(wishList.filter(t => t !== tutor));
    } else {
      setWishList([...wishList, tutor]);
    }
  };

  /** @returns Rendered App component */
  return (
    <div style={{ display: 'flex', padding: '2rem', fontFamily: 'Arial', gap: '2rem' }}>
      {/* Left Column: Filters */}
      <div style={{ width: '30%' }}>
        <h2>Filters</h2>
        <CourseFilter selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <ScoreSlider minScore={minScore} setMinScore={setMinScore} />
        <SchoolFilter selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools} />
        <TimeSelector selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />
      </div>

      {/* Right Column: Wishlist and TutorList */}
      <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <WishList tutors={wishList} toggleWish={toggleWish} />
        <TutorList tutors={filteredTutors} toggleWish={toggleWish} wishList={wishList} />
      </div>
    </div>
  );
};

export default App;


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

//0422
// import { useState } from 'react';
// import { tutors } from './tutors';
// import CourseFilter from './components/CourseFilter';
// import ScoreSlider from './components/ScoreSlider';
// import SchoolFilter from './components/SchoolFilter';
// import TutorList from './components/TutorList';
// import TimeSlider from './components/TimeSlider';

// const App = () => {
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [minScore, setMinScore] = useState(85);
//   const [selectedSchools, setSelectedSchools] = useState([]);
//   const [selectedHours, setSelectedHours] = useState([8, 22]); // time range in 24hr
//   // const [selectedSlots, setSelectedSlots] = useState([]);


//   const filteredTutors = tutors.filter(tutor => {
//     const matchesCourse =
//       selectedCourses.length === 0 || selectedCourses.some(c => tutor.course.includes(c));
//     const matchesScore = tutor.satisfaction_score >= minScore;
//     const matchesSchool =
//       selectedSchools.length === 0 || selectedSchools.some(school =>
//         tutor.target_school.includes(school)
//       );
//     const matchesTime = tutor.available_time_slot.some(slot => {
//       const [start] = slot.split('-').map(t => parseInt(t.split(':')[0]));
//       return start >= selectedHours[0] && start <= selectedHours[1];
//     });

//     return matchesCourse && matchesScore && matchesSchool && matchesTime;
//   });

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>Tutor Consult</h1>
//       <CourseFilter selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
//       <ScoreSlider minScore={minScore} setMinScore={setMinScore} />
//       <SchoolFilter selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools} />
//       <TimeSlider selectedHours={selectedHours} setSelectedHours={setSelectedHours} />
//       {/* <TimeSelector selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} /> */}
//       <TutorList tutors={filteredTutors} />
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import { tutors } from './tutors';
// import CourseFilter from './components/CourseFilter';
// import ScoreSlider from './components/ScoreSlider';
// import SchoolFilter from './components/SchoolFilter';
// import TutorList from './components/TutorList';
// // import TimeSlider from './components/TimeSlider';
// import TimeSelector from './components/TimeSelector';

// const App = () => {
//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [minScore, setMinScore] = useState(85);
//   const [selectedSchools, setSelectedSchools] = useState([]);
//   const [selectedSlots, setSelectedSlots] = useState([]); // half-hour slot strings like "9:30"

//   const filteredTutors = tutors.filter(tutor => {
//     const matchesCourse =
//       selectedCourses.length === 0 || selectedCourses.some(c => tutor.course.includes(c));
//     const matchesScore = tutor.satisfaction_score >= minScore;
//     const matchesSchool =
//       selectedSchools.length === 0 || selectedSchools.some(school =>
//         tutor.target_school.includes(school)
//       );
//     const matchesTime =
//       selectedSlots.length === 0 ||
//       tutor.available_time_slot.some(slot => selectedSlots.includes(slot.split('-')[0]));

//     return matchesCourse && matchesScore && matchesSchool && matchesTime;
//   });

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>Tutor Consult</h1>
//       <CourseFilter selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
//       <ScoreSlider minScore={minScore} setMinScore={setMinScore} />
//       <SchoolFilter selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools} />
//       <TimeSelector selectedSlots={selectedSlots} setSelectedSlots={setSelectedSlots} />
//       {/* <TimeSlider selectedHours={selectedHours} setSelectedHours={setSelectedHours} /> */}
//       <TutorList tutors={filteredTutors} />
//     </div>
//   );
// };

// export default App;

// App.jsx
