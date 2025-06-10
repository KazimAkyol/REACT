import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
    const [showImage, setShowImage] = useState(true);

    // console.log(statistics);
    return (
        <Card
            style={{ width: "18rem" }}
            className="player-kart m-auto"
            role="button"
            onClick={() => setShowImage(!showImage)}
        >
            {showImage ? (
                <Card.Img variant="top" src={img} className="player-resim" />
            ) : (
                <ul>
                    {statistics.map((item, index) => (
                        <li className="h3 list-unstyled text-start"> 🏀 {item} </li>
                    ))}
                </ul>
            )}

            <Card.Footer className="text-muted">
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
};

export default PlayerCard;
