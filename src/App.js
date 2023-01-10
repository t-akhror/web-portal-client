import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// import pages and Components
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Header from "./components/layouts/Header";
import MyReviews from "./components/review/MyReviews";
import Home from "./components/pages/Home";
import ReviewForm from "./components/review/ReviewForm";
import NotFound from "./components/pages/NotFound";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allreviews" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/myreviews"
          element={user ? <MyReviews /> : <Navigate to="/" />}
        />
        <Route
          path="/newreview"
          element={user ? <ReviewForm /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
