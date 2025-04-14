function ScoreSlider({ minScore, setMinScore }) {
  return (
    <div>
      <h3>Minimum Satisfaction Score: {minScore}</h3>
      <input
        type="range"
        min="85"
        max="100"
        value={minScore}
        onChange={(e) => setMinScore(Number(e.target.value))}
      />
    </div>
  );
}

export default ScoreSlider;
