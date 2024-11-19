import React from "react";
import { TiDelete } from "react-icons/ti";

const GorevleriGoster = ({ yapilacak }) => {
  return (
    <div>
      {yapilacak.map((a) => (
        <div>
          <h3>
            {a.text}

            <TiDelete />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;
