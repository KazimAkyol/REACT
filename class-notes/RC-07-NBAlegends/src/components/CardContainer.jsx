import React from "react";
import { data } from "../helpers/data";

import PlayerCard from "./PlayerCard";
import { Container, Form } from "react-bootstrap";

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
        <Container>

        </Container>
      </div>
    </>
  );
};

export default CardContainer;
