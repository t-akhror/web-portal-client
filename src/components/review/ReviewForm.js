import React, { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ReviewForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [reviewImage, setReviewImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useReviewContext();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = new FormData();
    review.append("title", title);
    review.append("brand", brand);
    review.append("category", category);
    review.append("reviewImage", reviewImage);
    review.append("description", description);
    review.append("user", user.user_id);

    if (!user) {
      setError(t("youMustBeLoggedIn"));
      return;
    }
    // for (let [key, value] of review.entries()) {
    //   console.log(key, value);
    // }
    const response = await fetch(
      "https://reviews-3hiw.onrender.com/api/reviews/",
      {
        method: "POST",
        body: review,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      console.log("response did not send");
    }
    if (response.ok) {
      console.log("data sent to server" + review);
      setTitle("");
      setBrand("");
      setCategory("");
      setReviewImage("");
      setDescription("");
      setError(null);
      // console.log("Review added", json);
      dispatch({ type: "CREATE_REVIEW", payload: json });
    }

    navigate("/");
  };
  return (
    <Container>
      <div className="fs-1 text-center text-primary-emphasis mb-3 ">
        {t("createANewReview")}
      </div>
      <Form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="my-3 shadow p-3 bg-body shadow-color rounded border border-primary-subtle bg-light-subtle"
      >
        <Row>
          <Col md={12} lg={6}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>{t("title")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("title")}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3" controlId="brand">
              <Form.Label>{t("tags")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("tags")}
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
            </Form.Group>{" "}
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>{t("category")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("category")}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>{t("coverImage")}</Form.Label>
          <Form.Control
            type="file"
            filename="reviewImage"
            onChange={(e) => setReviewImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>{t("description")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <Button className="w-auto" variant="outline-primary" type="submit">
          {" "}
          {t("createReview")}
        </Button>
        {error && <div className="error-msg-box">{error}</div>}
      </Form>
    </Container>
  );
}

export default ReviewForm;
