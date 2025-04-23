/**
 * show the list of tutors the user has added to their wishlist.
 * Allow users to remove tutors from the list by clicking the ❤️ button.
 */
const WishList = ({ tutors, toggleWish }) => (
  <div>
    <h2>Wish List ({tutors.length})</h2>
    {/* If wishlist is empty, display a message */}
    {tutors.length === 0 ? (
      <p>No tutors saved yet.</p>
    ) : (
      <ul>
        {tutors.map((tutor, index) => (
          <li key={index}>
            <strong>{tutor.name}</strong>
            {/* Allows removal from wishlist */}
            <button
              onClick={() => toggleWish(tutor)}
            >
              ❤️
            </button>
            <br />
            Courses: {tutor.course.join(', ')}<br />
            Score: {tutor.satisfaction_score}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default WishList;
