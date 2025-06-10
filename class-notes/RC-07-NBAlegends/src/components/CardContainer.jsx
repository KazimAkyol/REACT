import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
    // console.log(data);

    const [arama, SetArama] = useState("");
    // console.log(arama);

    //! 1.yöntem
    // let filtrelenmisData = data.filter((d) => d.name.includes(arama));
    // console.log(filtrelenmisData);

    return (
        <div>
            <Form.Control
                placeholder="Search Player.."
                className="w-50 m-auto"
                onChange={(e) => SetArama(e.target.value)}
            />
            <Container className="my-2 kartContainer p-3">
                <Row className="g-3">
                    {data
                        .filter((d) => d.name.toLowerCase().includes(arama.toLowerCase()))
                        .map((player) => (
                            <Col
                                xs={12}
                                md={6}
                                lg={3}
                                className="my-2 m-auto"
                                key={player.name}
                            >
                                <PlayerCard {...player} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default CardContainer;
