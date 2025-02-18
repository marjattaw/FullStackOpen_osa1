import { useState } from 'react';

// Nappikomponentti palautteen antamiseen
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Tilastorivi-komponentti
const StatisticLine = ({ text, value }) => (
  <p>{text}: {value}</p>
);

// Tilastojen näyttämisestä vastaava komponentti
const Statistics = ({ hyvä, neutraali, huono }) => {
  const yhteensä = hyvä + neutraali + huono;

  if (yhteensä === 0) {
    return <p>Ei yhtään palautetta annettu</p>;
  }

  const keskiarvo = (hyvä - huono) / yhteensä;
  const positiivisia = (hyvä / yhteensä) * 100;

  return (
    <div>
      <h2>Tilastot</h2>
      <StatisticLine text="Hyvä" value={hyvä} />
      <StatisticLine text="Neutraali" value={neutraali} />
      <StatisticLine text="Huono" value={huono} />
      <StatisticLine text="Kaikki" value={yhteensä} />
      <StatisticLine text="Keskiarvo" value={keskiarvo.toFixed(1)} />
      <StatisticLine text="Positiivisia" value={`${positiivisia.toFixed(1)}%`} />
    </div>
  );
};

const App = () => {
  const [hyvä, setHyvä] = useState(0);
  const [neutraali, setNeutraali] = useState(0);
  const [huono, setHuono] = useState(0);

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setHyvä(hyvä + 1)} text="Hyvä" />
      <Button handleClick={() => setNeutraali(neutraali + 1)} text="Neutraali" />
      <Button handleClick={() => setHuono(huono + 1)} text="Huono" />

      <Statistics hyvä={hyvä} neutraali={neutraali} huono={huono} />
    </div>
  );
};

export default App;
