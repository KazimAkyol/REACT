import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PlayerCard from "./components/PlayerCard";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />

      <CardContainer />

      <PlayerCard />
    </Container>
  );
}

export default App;
