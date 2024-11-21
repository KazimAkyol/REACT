import React, { useState } from "react";

const AddPatient = ({ hastalar, setPatient }) => {
  const [hastaAdi, setName] = useState("");
  const [tarih, setTarih] = useState("");

  const kayitSubmit = (e) => {
    e.preventDefault();

    setPatient([
      ...hastalar,
      {
        id: 7,
        patientName: hastaAdi,
        day: tarih,
        isDone: false,
        myDoctor: "kutsi",
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={kayitSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className="doc" type="submit">
            <span>kasjcklsajd </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
