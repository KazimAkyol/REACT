import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {
  const { namee } = useParams();
  return (
    <div>
      {data.map(
        (a) =>
          a.name === namee && (
            <div>
              <h3>{a.name}</h3>
              <img src={a.img} alt="" />
              <h3>{a.text}</h3>
              <h4>{a.yorum}</h4>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
