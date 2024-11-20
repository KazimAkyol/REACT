import React from "react";
import { doctorData } from "../Pages/doctor";
import HastaEkle from "./HastaEkle";

const Card = ({ DataA, setDataA }) => {
  return (
    <div className="card">
      {doctorData.map((a) => (
        <div key={a.id}>
          <img src={a.doctorImg} alt="" onClick={() => <HastaEkle />} />
          <h3>{a.doctorName}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
