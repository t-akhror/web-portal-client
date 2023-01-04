import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Reviews from "../review/Reviews";
import { useReviewContext } from "../../hooks/useReviewsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

function Main() {
  const { reviews, dispatch } = useReviewContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchReview = async () => {
      const response = await fetch("/api/reviews", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_REVIEW", payload: json });
      }
    };
    if (user) {
      fetchReview();
    }
  }, [dispatch, user]);

  return (
    <Container className="bg-white p-3">
      {reviews &&
        reviews.map((review) => <Reviews review={review} key={review._id} />)}
    </Container>
  );
}

export default Main;
