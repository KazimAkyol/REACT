import React from "react";

// const Card = ({ hrscp }) => {
//   // console.log(hrscp);

//   const { title, date, image, desc } = hrscp;

const Card = ({ id, title, image, date, desc }) => {
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="date">
        <h1>{date}</h1>
      </div>

      <div>
        <img src={image} alt="" />
      </div>

      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
