import React, { useState } from "react";

const HastaEkle = ({ eklenecek, setEklenecek }) => {
  const [ekle, setEkle] = useState("");
  const [day, setDay] = useState("");

  return (
    <div>
      <header className="header">
        <h1>HOSPITAL</h1>
        <button className="btn">ADD TASK BAR</button>
      </header>
      <form>
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
