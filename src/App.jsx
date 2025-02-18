import { useState } from 'react';

// Tilastojen näyttämisestä vastaava komponentti
const Statistics = ({ hyvä, neutraali, huono }) => {
  const yhteensä = hyvä + neutraali + huono;
  const keskiarvo = yhteensä === 0 ? 0 : (hyvä - huono) / yhteensä;
  const positiivisia = yhteensä === 0 ? 0 : (hyvä / yhteensä) * 100;

  return (
    <div>
      <h2>Tilastot</h2>
      <p>Hyvä: {hyvä}</p>
      <p>Neutraali: {neutraali}</p>
      <p>Huono: {huono}</p>
      <p>Kaikki: {yhteensä}</p>
      <p>Keskiarvo: {keskiarvo.toFixed(1)}</p>
      <p>Positiivisia: {positiivisia.toFixed(1)}%</p>
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
      <button onClick={() => setHyvä(hyvä + 1)}>Hyvä</button>
      <button onClick={() => setNeutraali(neutraali + 1)}>Neutraali</button>
      <button onClick={() => setHuono(huono + 1)}>Huono</button>

      {/* Tilastot erillisen komponentin kautta */}
      <Statistics hyvä={hyvä} neutraali={neutraali} huono={huono} />
    </div>
  );
};

export default App;
