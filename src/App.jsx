import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => setGood(good + 1)}>Hyvä</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutraali</button>
      <button onClick={() => setBad(bad + 1)}>Huono</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default App;
