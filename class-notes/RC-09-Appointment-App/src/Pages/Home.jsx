import React, { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { doctor } from "../Pages/doctor";

import Data from "../helper/data";

const Home = () => {
  const [eklenecek, setEklenecek] = useState(Data);
  const [doctor, setDoctor] = useState(doctor);

  // console.log(eklenecek);
  // console.log(Data);
  return (
    <div>
      <header>
        <Doctor doctor={doctor} />
      </header>

      <HastaEkle eklenecek={eklenecek} setEklenecek={setEklenecek} />

      <HastaListe eklenecek={eklenecek} setEklenecek={setEklenecek} />
    </div>
  );
};

export default Home;
