import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap/";
import { Link } from "react-router-dom";

function OurNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Yoga Trainers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/"> Home </Link>
              </Nav.Link>
              <Nav.Link>Find Trainer</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Login / Sign up" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/login"> Login </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/register">Sign up </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Give a Feedback</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default OurNavbar;
