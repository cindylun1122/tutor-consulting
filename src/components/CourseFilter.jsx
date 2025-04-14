const subjects = ["Math", "Physics", "Chemistry", "English", "Spanish", "History", "Biology", "Geography"];

function CourseFilter({ selectedCourses, setSelectedCourses }) {
  const toggleCourse = (subject) => {
    if (selectedCourses.includes(subject)) {
      setSelectedCourses(selectedCourses.filter(s => s !== subject));
    } else {
      setSelectedCourses([...selectedCourses, subject]);
    }
  };

  return (
    <div>
      <h3>Courses</h3>
      {subjects.map(subject => (
        <label key={subject} style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            checked={selectedCourses.includes(subject)}
            onChange={() => toggleCourse(subject)}
          />
          {subject}
        </label>
      ))}
    </div>
  );
}

export default CourseFilter;
