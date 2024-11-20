import React, { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import Card from "../components/Card";

import Data from "../helper/data";
import { doctorData } from "./doctor";

const Home = () => {
  const [eklenecek, setEklenecek] = useState(Data);
  const [dataA, setDataA] = useState(doctorData);

  // console.log(eklenecek);
  // console.log(Data);

  return (
    <div>
      <Card doctor={doctorData} />

      <HastaEkle eklenecek={eklenecek} setEklenecek={setEklenecek} />

      <HastaListe eklenecek={eklenecek} setEklenecek={setEklenecek} />
    </div>
  );
};

export default Home;
