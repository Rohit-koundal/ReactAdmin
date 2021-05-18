import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
              <Link className="nav-link" to="/Register">
                Register
              </Link>
              <Link className="nav-link" to="/Admin">
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
