import React, { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import Card from "../components/Card";

import Data from "../helper/data";

const Home = () => {
  const [eklenecek, setEklenecek] = useState(Data);

  // console.log(eklenecek);
  // console.log(Data);
  return (
    <div>
      <HastaEkle eklenecek={eklenecek} setEklenecek={setEklenecek} />

      <HastaListe />

      <Card />
    </div>
  );
};

export default Home;