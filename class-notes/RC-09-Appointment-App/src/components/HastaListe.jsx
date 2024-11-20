import React from "react";
import { TiDelete } from "react-icons/ti";

const HastaListe = ({ eklenecek, setEklenecek }) => {
  return (
    <div>
      {eklenecek.map((a) => (
        <div key={a.id} className={a.bittiMi === true ? "" : "false"}>
          <h3>
            {a.text}
            <TiDelete
              style={{ color: "red" }}
              onClick={() =>
                setEklenecek(eklenecek.filter((x) => x.id !== a.id))
              }
            />
          </h3>
          {a.day}
          {a.bittiMi}
          {a.doktor}
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
