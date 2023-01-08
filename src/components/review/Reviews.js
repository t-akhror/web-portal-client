import React, { useState } from "react";
import { useReviewContext } from "../../hooks/useReviewsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { ChatLeftText } from "react-bootstrap-icons";

function Reviews({ review }) {
  const [rating, setRating] = useState(1);
  const { dispatch } = useReviewContext();

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  // const handleDelete = async () => {
  //   const response = await fetch("/api/reviews/" + review._id, {
  //     method: "DELETE",
  //   });
  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: "DELETE_REVIEW", payload: json });
  //   }
  // };
  return (
    <Card className="my-3 shadow-sm p-3 bg-body rounded border-1 ">
      <Row>
        <Col md={4} className="">
          <Card.Img variant="top" src="" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>
              {review.title}
              <small className="fs-6 text-muted float-end">
                Created:{" "}
                {formatDistanceToNow(new Date(review.createdAt), {
                  addSuffix: true,
                })}
              </small>
            </Card.Title>
            <Card.Text>{review.description.slice(0, 250)}</Card.Text>
            <Card.Link href="#" className="">
              Read more
            </Card.Link>
            <div className="d-flex justify-content-between align-item-center">
              <div className="fst-italic fw-light">by Alen</div>
              <div className="d-flex align-item-center">
                <small className="text-muted me-3 mt-1">
                  5 <ChatLeftText />
                </small>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={onStarClick.bind(this)}
                />
              </div>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default Reviews;
