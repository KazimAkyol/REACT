import React from "react";
import { Logo, Nav } from "./NavbarStyles";

function Navbar() {
  return (
    <Nav>
      <Logo to="/home">
        {"<Clarusway/>"} <span>Recipe</span>
      </Logo>
    </Nav>
  );
}

export default Navbar;
