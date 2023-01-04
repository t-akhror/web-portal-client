import { ReviewsContext } from "../context/ReviewContext";
import { useContext } from "react";

export const useReviewContext = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw Error("useReviewContext must be used inside a ReviewContextProvider");
  }

  return context;
};
