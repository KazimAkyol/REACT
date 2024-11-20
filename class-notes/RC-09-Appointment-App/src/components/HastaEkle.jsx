import React, { useState } from "react";

const HastaEkle = ({ eklenecek, setEklenecek }) => {
  const [ekle, setEkle] = useState("");
  const [day, setDay] = useState("");

  const gonder = (a) => {
    a.preventDefault();

    setDataA([
      {
        id: 7,
        text: "Mauro Icardi",
        day: "Dec 21th at 1:00pm",
        bittiMi: "",
        doktor: "",
      },
      ...DataA,
    ]);
  };
  //  a yi buraya gönder ve burada karsila  ve ekrana bastir
  return (
    <div>
      <header className="header">
        <h1>HOSPITAL</h1>
      </header>
      <form onSubmit={gonder}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input id="text" type="text" name="text" />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input id="day" type="datetime-local" name="day" />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            ICIN KAYIT OLUSTUR
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;
