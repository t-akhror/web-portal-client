import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Reviews from "../review/Reviews";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { SERVER_URL } from "../../api/api";

function Main() {
  const { reviews, dispatch } = useReviewContext();

  useEffect(() => {
    const fetchReview = async () => {
      const response = await fetch(SERVER_URL + "/api/reviews/allreviews", {
        // headers: {
        //   Authorization: `Bearer ${user.token}`,
        // },
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SETALL_REVIEW", payload: json });
      }
    };

    fetchReview();
  }, [dispatch]);

  return (
    <Container className="p-3">
      {reviews &&
        reviews.map((review) => <Reviews review={review} key={review._id} />)}
    </Container>
  );
}

export default Main;
