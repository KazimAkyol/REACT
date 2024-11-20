import React, { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";


import Data from "../helper/data";

const Home = () => {
  const [eklenecek, setEklenecek] = useState(Data);
  const [doktorlar, setDoktorlar] = useState(doktorlarData)

  // console.log(eklenecek);
  // console.log(Data);
  return (
    <div>
    <header>
        <Doktor doktordata={doktordata} />
    </header>
      <Card />

      <HastaEkle eklenecek={eklenecek} setEklenecek={setEklenecek} />

      <HastaListe eklenecek={eklenecek} setEklenecek={setEklenecek} />
    </div>
  );
};

export default Home;
