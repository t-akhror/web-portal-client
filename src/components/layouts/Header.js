import React, { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; //language
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { t, i18n } = useTranslation();
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
  // change language
  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant={theme === "dark" ? "light" : "dark"}
      bg={theme === "dark" ? "dark" : "primary"}
      className="shadow-sm p-3 mb-4 border-bottom border-primary-subtle "
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Final Project
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-lg-3">
            {user ? (
              <>
                <Nav.Link as={Link} to="/myreviews">
                  {t("myReviews")}
                </Nav.Link>
                <Nav.Link as={Link} to="/newreview">
                  {t("newReviews")}
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
                placeholder={t("search")}
                className="me-2  text-light"
                aria-label="Search"
              />
              <Button variant="outline-light">{t("search")}</Button>
            </Form>
          </Nav>
          {user && (
            <>
              <Nav>
                <span className="me-2 text-light"> {user.email}</span>
              </Nav>
              <Nav>
                <Button variant="outline-light" onClick={handleLogout}>
                  {t("logOut")}
                </Button>
              </Nav>
            </>
          )}
          {!user && (
            <Nav>
              <Nav.Link as={Link} to="/login">
                {t("logIn")}
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                {t("signIn")}
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
        <div className="d-flex">
          <Form className="ms-2">
            <Form.Check
              className="text-light"
              type="switch"
              id="custom-switch"
              label={
                theme === "light" ? (
                  <FontAwesomeIcon icon={faMoon} />
                ) : (
                  <FontAwesomeIcon icon={faSun} />
                )
              }
              onChange={() => changeTheme()}
            />
          </Form>
          <NavDropdown
            title={localStorage.getItem("lng").toUpperCase()}
            id="collasible-nav-dropdown"
            className="text-light ms-3"
          >
            <NavDropdown.Item as="button" onClick={() => changeLng("en")}>
              En
            </NavDropdown.Item>
            <NavDropdown.Item as="button" onClick={() => changeLng("uz")}>
              Uz
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
