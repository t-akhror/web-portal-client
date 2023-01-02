import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <Container fluid="md">
      <Row className="justify-content-center align-items-center ">
        <Col
          md={6}
          lg={4}
          className="shadow p-3 mb-5 bg-body rounded mt-5 mx-2 bg-white"
        >
          <Form className="p-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="tex-muted">
                {" "}
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRadio">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {" "}
              Log in
            </Button>
            {error && <div className="error-msg-box">{error}</div>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
