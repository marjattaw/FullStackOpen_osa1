import { useState } from 'react';

// Anekdootit-taulukko
const anekdootit = [
  'Jos se sattuu, tee se useammin.',
  'Lisäämällä työvoimaa myöhässä olevaan projektiin saadaan se vielä enemmän myöhästymään.',
  'Ensimmäiset 90 % koodista vie ensimmäiset 90 % kehitysajasta... Loput 10 % vie toiset 90 % ajasta.',
  'Kuka tahansa osaa kirjoittaa koodia, jota tietokone ymmärtää. Hyvät ohjelmoijat kirjoittavat koodia, jota ihmiset ymmärtävät.',
  'Ennenaikainen optimointi on kaiken pahan alku ja juuri.',
  'Debuggaus on kaksi kertaa vaikeampaa kuin koodin kirjoittaminen. Jos siis kirjoitat koodin mahdollisimman fiksusti, et ole tarpeeksi fiksu sitä debuggaamaan.',
  'Ohjelmointi ilman console.log:n raskasta käyttöä on kuin lääkäri ilman röntgeniä tai verikokeita.',
  'Ainoa tapa mennä nopeasti on tehdä asiat hyvin.'
];

const App = () => {
  const [valittu, setValittu] = useState(0);

  const uusiSatunnainen = () => {
    const satunnainen = Math.floor(Math.random() * anekdootit.length);
    setValittu(satunnainen);
  };

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      <p>{anekdootit[valittu]}</p>
      <button onClick={uusiSatunnainen}>Seuraava anekdootti</button>
    </div>
  );
};

export default App;
