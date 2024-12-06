import React from "react";
import { MenuLink, Nav } from "./NavbarStyles";
import { Menu } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <img src="https://github.com/clarusway" alt="" />

        <div>
          <Link>ABOUT</Link>
          <a href="www.">GITHUB</a>
          <Link>LOG OUT</Link>
        </div>
        <Menu />
        <MenuLink />
      </Nav>
    </div>
  );
};

export default Navbar;
