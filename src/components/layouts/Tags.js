import React from "react";
import Badge from "react-bootstrap/Badge";

export default function Tags() {
  return (
    <div>
      <div className="fs-3 fw-bold mb-3"> Tags</div>
      <Badge bg="primary">book</Badge> <Badge bg="secondary">detective</Badge>{" "}
      <Badge bg="success">action</Badge>
      <Badge bg="danger">comedy</Badge>{" "}
      <Badge bg="warning" text="dark">
        advanture
      </Badge>{" "}
      <Badge bg="info">romance</Badge>{" "}
      <Badge bg="light" text="dark">
        war
      </Badge>{" "}
      <Badge bg="dark">sport</Badge>
    </div>
  );
}
