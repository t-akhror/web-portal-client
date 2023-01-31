import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useReviewContext } from "../../hooks/useReviewsContext";

function ReviewDetail() {
  const { id } = useParams();
  const { reviews } = useReviewContext();
  let currentReview = reviews.filter((item) => item._id === id);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="border-primary">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{currentReview[0].title}</Card.Title>
              <Card.Text></Card.Text>
              <blockquote className="blockquote mb-0">
                <p> {currentReview[0].description} </p>
                <br />
              </blockquote>
              <div className="d-flex justify-content-between align-item-center">
                <div className="fst-italic fw-light">Author: {"Alen"}</div>
                <div className="d-flex align-item-center">
                  <small className="text-muted me-3 mt-1">
                    5 <FontAwesomeIcon icon={faCommentDots} />
                  </small>
                  {formatDistanceToNow(new Date(currentReview[0].createdAt), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewDetail;
