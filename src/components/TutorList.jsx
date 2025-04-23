// const TutorList = ({ tutors }) => (
//   <div>
//     <h2>Matching Tutors ({tutors.length})</h2>
//     <ul>
//       {tutors.map((tutor, index) => (
//         <li key={index}>
//           <strong>{tutor.name}</strong><br />
//           Courses: {tutor.course.join(', ')}<br />
//           Score: {tutor.satisfaction_score}<br />
//           Target Schools: {tutor.target_school.join(', ')}<br />
//           Available: {tutor.available_time_slot.join(', ')}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default TutorList;


/**
 * Renders a list of tutors that match the selected filters.
 * Each tutor can be added to or removed from the wishlist.
 */
const TutorList = ({ tutors, toggleWish, wishList }) => (
  <div>
    <h2>Matching Tutors ({tutors.length})</h2>
    <ul>
      {tutors.map((tutor, index) => {
        // const isWished = wishList.some(t => t.name === tutor.name);
        // compare by object reference
        const isWished = wishList.includes(tutor);
        return (
          <li key={index}>
            <strong>{tutor.name}</strong>
            <button
              onClick={() => toggleWish(tutor)}
            >
              {/* Toggle heart on click to add/remove from wishlist */}
              {isWished ? '❤️' : '🤍'}
            </button>
            <br />
            {/* Join course and other arrays into readable strings */}
            Courses: {tutor.course.join(', ')}<br />
            Score: {tutor.satisfaction_score}<br />
            Target Schools: {tutor.target_school.join(', ')}<br />
            Available: {tutor.available_time_slot.join(', ')}
          </li>
        );
      })}
    </ul>
  </div>
);

export default TutorList;
