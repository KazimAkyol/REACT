import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  const [doktorlar, setDoctors] = useState(doctorData);
  const [hastalar, setPatient] = useState(hastaData);
  const [show, setShow] = useState(true);

  const doctorClick = (id) => {
    setShow(false);

    setDoctors(doktorlar.filter((a) => a.id === id));
  };

  return (
    <div style={{ display: show === true ? "block" : "flex" }}>
      <header>
        <h1>HOSPITAL</h1>

        <div className="dr">
          {doktorlar.map((dr) => (
            <div key={dr.id}>
              <img
                className="btn"
                width="180px"
                height="150px"
                src={dr.doctorImg}
                alt=""
                style={{ background: show === true ? "aqua" : "lightgreen" }}
                onClick={() => doctorClick(dr.id)}
              />

              <h4
                style={{
                  background: show === true ? "aqua" : "lightgreen",
                  borderLeft:
                    show === true ? "10px solid blue" : "10px solid green",
                }}
              >
                {dr.doctorName}
              </h4>
            </div>
          ))}
        </div>
      </header>

      {show === false && <AddPatient />}

      <PatientList hastalar={hastalar} setPatient={setPatient} />
    </div>
  );
};

export default Home;
