import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// import pages and Components
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Header from "./components/layouts/Header";
import Welcome from "./components/pages/Welcome";
import MyReviews from "./components/review/MyReviews";
import Home from "./components/pages/Home";
import ReviewForm from "./components/review/ReviewForm";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
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
          path="/allreviews"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/myreviews" element={user ? <MyReviews /> : <Welcome />} />
        <Route
          path="/newreview"
          element={user ? <ReviewForm /> : <Welcome />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
