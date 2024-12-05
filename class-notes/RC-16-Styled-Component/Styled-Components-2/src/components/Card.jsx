import React from "react";
import data from "../data";
import ImageSSS from "./styles/ImageSSS";

const Card = () => {
  return (
    <div>
      {data.map((a) => (
        <div key={a.id}>
          <div>
            <h2>{a.title}</h2>
            <p></p>
          </div>

          <ImageSSS src={`/images/${a.image}`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
