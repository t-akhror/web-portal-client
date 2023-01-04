import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useReviewContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { title, brand, category, image, description };
    if (!user) {
      setError("You must be logged in ");
      return;
    }
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setBrand("");
      setCategory("");
      setImage("");
      setDescription("");
      setError(null);
      console.log("Review added", json);
      dispatch({ type: "CREATE_REVIEW", payload: json });
    }
  };

  return (
    <Container className="bg-white p-3">
      <div className="fs-3 text-center mb-3 ">Create a new review</div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3" controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
            </Form.Group>{" "}
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Cover Image </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <Button className="w-auto" variant="success" type="submit">
          {" "}
          Create review
        </Button>
        {error && <div className="error-msg-box">{error}</div>}
      </Form>
    </Container>
  );
}

export default ReviewForm;
