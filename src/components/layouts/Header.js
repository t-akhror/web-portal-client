import React from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="shadow-sm p-3 mb-5 bg-body rounded"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Final Project
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-lg-3">
            <Nav.Link href="#features">Reviews</Nav.Link>
            <Nav.Link href="#pricing">My Reviews</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          {user && (
            <Nav>
              <span> {user.email}</span>
              <Button variant="success" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          )}
          {!user && (
            <Nav>
              <Nav.Link as={Link} to="/login">
                LogIn
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                SignUp
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
