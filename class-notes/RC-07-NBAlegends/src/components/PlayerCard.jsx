import React from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  console.log(statistics);
  return (
    <Card style={{ width: "18rem" }} className="player-kart">
      <Card.Img variant="top" src={img} className="player-resim" />
      <Card.Footer className="text-muted">
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
