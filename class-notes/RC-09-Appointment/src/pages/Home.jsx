import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doktorlar, setDoctors] = useState(doctorData);
  const [hastalar, setPatient] = useState(hastaData);
  const [show, setShow] = useState(true);

  return (
    <div>
      <header>
        <h1>HOSPITAL</h1>
      </header>

      <div className="dr"></div>
    </div>
  );
};

export default Home;
