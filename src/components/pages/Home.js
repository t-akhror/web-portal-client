import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Categories from "../layouts/Categories";
import Tags from "../layouts/Tags";
import Reviews from "../review/Reviews";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { SERVER_URL } from "../../api/api";

export default function Home() {
  const [filterKey, setFilterKey] = useState("all");
  const { reviews, dispatch } = useReviewContext();
  useEffect(() => {
    const fetchReview = async () => {
      const response = await fetch(SERVER_URL + "/api/reviews/allreviews", {});
      const json = await response.json();
      // console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_REVIEW", payload: json });
      }
    };

    fetchReview();
  }, [dispatch]);

  return (
    <Container className="">
      <Row>
        <Col md={3} className="my-3 ">
          <div className="bg-light-subtle shadow p-3 bg-body shadow-sm-color rounded border border-primary-subtle">
            <Categories setFilterKey={setFilterKey} />
            <div className="my-3">
              <Tags />
            </div>
          </div>
        </Col>
        <Col md={9}>
          {reviews &&
            (filterKey === "all"
              ? reviews.map((review) => (
                  <Reviews review={review} key={review._id} />
                ))
              : reviews
                  .filter(
                    (review) => review.category.toLowerCase() === filterKey
                  )
                  .map((review) => (
                    <Reviews review={review} key={review._id} />
                  )))}
        </Col>
      </Row>
    </Container>
  );
}
