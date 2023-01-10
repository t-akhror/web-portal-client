import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18next/i18next";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ReviewsContextProvider } from "./context/ReviewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ReviewsContextProvider>
      <App />
    </ReviewsContextProvider>
  </AuthContextProvider>
);
