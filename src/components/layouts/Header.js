import React, { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MoonFill } from "react-bootstrap-icons";
const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  // theme function

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || "light";
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="shadow-sm p-3 mb-4 bg-body rounded"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Final Project
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-lg-3">
            <Nav.Link as={Link} to="/allreviews">
              Reviews
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/myreviews">
                  My Reviews
                </Nav.Link>
                <Nav.Link as={Link} to="/newreview">
                  New Reviews
                </Nav.Link>
              </>
            ) : (
              ""
            )}
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
            <>
              <Nav>
                <span className="me-2"> {user.email}</span>
              </Nav>
              <Nav>
                <Button variant="success" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav>
            </>
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
        <Form className="ms-2">
          <Form.Check
            type="switch"
            id="custom-switch"
            label={theme === "light" ? "Dark" : "Light"}
            onChange={() => changeTheme()}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
