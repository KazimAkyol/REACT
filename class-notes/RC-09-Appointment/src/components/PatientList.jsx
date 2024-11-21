import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ hastalar, setPatient }) => {
  return (
    <div>
      {hastalar.map((hasta) => (
        <div>
          <div>
            <h2>{hasta.patientName}</h2>
            <h4>{hasta.day}</h4>
            <h3>{hasta.myDoctor}</h3>
          </div>

          <FaTimesCircle />
        </div>
      ))}
    </div>
  );
};

export default PatientList;
