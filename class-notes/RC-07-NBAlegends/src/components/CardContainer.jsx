import React from "react";
import { data } from "../helpers/data";

import PlayerCard from "./PlayerCard";
import { Row, Col, Container, Form } from "react-bootstrap";

const CardContainer = () => {
  return (
    <>
      <div>
        <Form.Control
          placeholder="Search Player..."
          aria-label="search"
          aria-describedby="basic-addon1"
          className="w-50"
        />
        <Container className="my-2 card-container">
          <Row>
            {data.map((player) => {
              <Col className="my-2 key={player.name} ">
                <PlayerCard {...player} />
              </Col>;
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardContainer;
