import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/newProduct">
              New Product
            </NavLink>
            <NavLink className="nav-link" to="/productList">
              Product List
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
