import React from "react";
import { Container, Image } from "react-bootstrap";
import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
    return (
        <Container className="my-3">
            <Image src={nbaLogo} width="200px" />
            <h1 className="display-4 fw-bold font-monospace my-3">NBA Legends</h1>
        </Container>
    );
};

export default Header;
