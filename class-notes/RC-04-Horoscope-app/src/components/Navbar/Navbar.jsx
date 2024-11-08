import React from "react";
import "./Navbar.scss";

import logo from "../../helper/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img src={logo} width="100px" alt="" />
      </div>

      <div className="link">
        <a href="#horoscope">Horoscope</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#article">Article</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
