import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Book, Film, Controller, CameraReels } from "react-bootstrap-icons";

export default function Categories() {
  return (
    <ListGroup variant="flush" className="bg-dark-subtle">
      <div className=" fs-4">Categories</div>
      <ListGroup.Item>
        {" "}
        <Book /> <span className="ms-2"> Books</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Controller />
        <span className="ms-2"> Games</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <Film />
        <span className="ms-2"> Movies</span>
      </ListGroup.Item>
      <ListGroup.Item>
        {" "}
        <CameraReels />
        <span className="ms-2"> Cartoons</span>
      </ListGroup.Item>
    </ListGroup>
  );
}
