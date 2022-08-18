import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <Navbar className="sticky-top" expand="lg" id="nav-header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/img/logo-ma.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="order-lg-2 d-flex justify-content-between">
          {/* <Nav.Link as={Link} to="/login">
            Log in
          </Nav.Link> */}
        </div>
        <div className="order-lg-1 justify-content-md-center">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/#about"
                className="text-decoration-none"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#experience"
                className="text-decoration-none"
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#work"
                className="text-decoration-none"
              >
                Work
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/#contact"
                className="text-decoration-none"
              >
                Contact
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
