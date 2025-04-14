function TutorList({ tutors }) {
  return (
    <div>
      <h2>Matching Tutors ({tutors.length})</h2>
      <ul>
        {tutors.map((tutor, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <strong>{tutor.name}</strong><br />
            Courses: {tutor.course.join(', ')}<br />
            Score: {tutor.satisfaction_score}<br />
            Target Schools: {tutor.target_school.join(', ')}<br />
            Available: {tutor.available_time_slot.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TutorList;
