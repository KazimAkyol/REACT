import React from "react";
import { MenuLink, Nav } from "./NavbarStyles";
import { Menu } from "./NavbarStyles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink>
        <img src="" alt="" />
      </NavLink>

      <NavLink to="/about">ABOUT</NavLink>
      <Nav.Link href="https://github.com/clarusway" target="blank">
        Github
      </Nav.Link>

      <NavLink to="/">LOG OUT</NavLink>

      <Menu />
      <MenuLink />
    </div>
  );
};

export default Navbar;
