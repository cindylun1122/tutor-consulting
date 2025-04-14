function TimeSlider({ selectedHours, setSelectedHours }) {
  const [start, end] = selectedHours;

  return (
    <div>
      <h3>Available Hours: {start}:00 to {end}:00</h3>
      <label>Start Time:</label>
      <input
        type="range"
        min="8"
        max="21"
        value={start}
        onChange={(e) => setSelectedHours([Number(e.target.value), end])}
      />
      <label>End Time:</label>
      <input
        type="range"
        min="9"
        max="22"
        value={end}
        onChange={(e) => setSelectedHours([start, Number(e.target.value)])}
      />
    </div>
  );
}

export default TimeSlider;
