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

function Signup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, firstname, lastname, dateOfBirth, password);
    await signup(email, firstname, lastname, dateOfBirth, password);
  };

  return (
    <Container fluid="md">
      <Row className="justify-content-center align-items-center">
        <Col
          md={6}
          lg={4}
          className="shadow p-3 mb-5 bg-body rounded mt-md-5 bg-white"
        >
          <Form className="p-3" onSubmit={handleSubmit} autoComplete="off">
            <p className="fs-3 text-center"> Create a new account</p>
            <FloatingLabel
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="firstname"
              label="Firstname"
              className="mb-3"
            >
              <Form.Control
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="Enter your Fistname"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="lastname"
              label="Lastname"
              className="mb-3"
            >
              <Form.Control
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="Enter your lastname"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="dateOfBirth"
              label="Date of Bith"
              className="mb-3"
            >
              <Form.Control
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                placeholder="Date of birth"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
              />
            </FloatingLabel>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {" "}
              Create
            </Button>
            {error && <div className="error-msg-box">{error}</div>}
          </Form>

          <p className="fs-6 text-center"> OR </p>
          <ListGroup className="px-3">
            <ListGroup.Item className="text-center">
              <img src={Gmail} alt="dj" className="img-fluid me-2" />
              Continue with Gmail
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="p-3">
            <ListGroup.Item className="text-center">
              <img src={Facebook} alt="dj" className="img-fluid me-2" />
              Continue with Facebook
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
