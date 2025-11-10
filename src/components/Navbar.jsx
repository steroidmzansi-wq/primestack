import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function FullWidthNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 m-0">
      {/* Use fluid container for full width */}
      <Container fluid>
        <Navbar.Brand href="#home">UPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">
                Something else
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FullWidthNavbar;
