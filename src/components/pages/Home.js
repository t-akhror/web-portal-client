import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Categories from "../layouts/Categories";
import Main from "../layouts/Main";

export default function Home() {
  return (
    <Container className="bg-white">
      <Row>
        <Col md={3} className="mt-3">
          <Categories />
        </Col>
        <Col md={9}>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}
