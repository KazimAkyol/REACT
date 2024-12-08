import React from "react";
import { Menu } from "./NavbarStyles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Menu>
        <NavLink className="nav-link" to="/about">
          ABOUT
        </NavLink>
        <a
          className="nav-link"
          href="https://github.com/clarusway"
          target="blank"
        >
          GITHUB
        </a>
        <NavLink className="nav-link" to="/logout">
          LOGOUT
        </NavLink>
      </Menu>
    </div>
  );
};

export default Navbar;
