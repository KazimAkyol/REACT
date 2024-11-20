import React from "react";
import { doctorData } from "../Pages/doctor";

const Card = ({ DataA, setDataA }) => {
  return (
    <div>
      {doctorData.map((a) => (
        <div key={a.id}>
          <h3>{a.doctorName}</h3>
          <img src={a.doctorImg} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
