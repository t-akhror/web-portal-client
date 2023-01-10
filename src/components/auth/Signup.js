import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

import Gmail from "../../images/google.png";
import Facebook from "../../images/facebook.png";
import { useSignup } from "../../hooks/useSignup";
import { useTranslation } from "react-i18next";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, firstname, lastname, dateOfBirth, password);
    await signup(email, firstname, lastname, dateOfBirth, password);
  };

  return (
    <Container fluid="md">
      <Row className="justify-content-center align-items-center">
        <Col
          md={6}
          lg={4}
          className="shadow p-3 mb-5 bg-body rounded mt-md-5 border border-primary-subtle"
        >
          <Form className="p-3" onSubmit={handleSubmit} autoComplete="off">
            <p className="fs-3 text-center"> {t("createANewAccount")}</p>
            <FloatingLabel
              controlId="email"
              label={t("enterEmail")}
              className="mb-3"
            >
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="firstname"
              label={t("firstname")}
              className="mb-3"
            >
              <Form.Control
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="firstname"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="lastname"
              label={t("lastname")}
              className="mb-3"
            >
              <Form.Control
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="lastname"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="dateOfBirth"
              label={t("dateOfBirth")}
              className="mb-3"
            >
              <Form.Control
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="password"
              label={t("password")}
              className="mb-3"
            >
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                autoComplete="new-password"
              />
            </FloatingLabel>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {t("create")}
            </Button>
            {error && <div className="error-msg-box">{error}</div>}
          </Form>

          <p className="fs-6 text-center"> {t("or")}</p>
          <ListGroup className="px-3">
            <ListGroup.Item className="text-center">
              <img src={Gmail} alt="dj" className="img-fluid me-2" />
              {t("continueWithGmail")}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="p-3">
            <ListGroup.Item className="text-center">
              <img src={Facebook} alt="dj" className="img-fluid me-2" />
              {t("continueWithFacebook")}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
