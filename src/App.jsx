const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Anna palautetta</h1>
      <button onClick={() => setGood(good + 1)}>Hyvä</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutraali</button>
      <button onClick={() => setBad(bad + 1)}>Huono</button>
      <h2>Statistiikka</h2>
      <p>Hyvä: {good}</p>
      <p>Neutraali: {neutral}</p>
      <p>Huono: {bad}</p>
      <p>Kaikki: {total}</p>
      <p>Keskiarvo: {average.toFixed(1)}</p>
      <p>Positiiviset: {positivePercentage.toFixed(1)}%</p>
    </div>
  );
};
