import React from "react";

// const Card = ({ hrscp }) => {
//   // console.log(hrscp);

//   const { title, date, image, desc } = hrscp;

const Card = ({ id, title, image, date, desc }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <h1>{date}</h1>
      </div>

      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
