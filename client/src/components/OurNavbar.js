import React, { useContext } from "react"; //
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import { LoggedUserContext } from "../App";
function OurNavbar() {
  const { currentLoggedInUser, setCurrentLoggedInUser } =
    useContext(LoggedUserContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Yoga Trainers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/findTrainer" className="nav-link">
                Find Trainer
              </NavLink>
              {/* <NavLink to="/" className="nav-link">
                About Us
              </NavLink> */}
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  currentLoggedInUser.name
                    ? currentLoggedInUser.name
                    : "Login / Sign up"
                }
                id="collasible-nav-dropdown"
              >
                {currentLoggedInUser.name ? (
                  <>
                    <NavDropdown.Item as={NavLink} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/logout">
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item as={NavLink} to="/login">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/register">
                      Sign up
                    </NavDropdown.Item>
                  </>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/">
                  Give a Feedback
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default OurNavbar;
