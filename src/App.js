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
        <Route
          path="/"
          element={user ? <Welcome /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/main"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        {user ? (
          <>
            <Route path="/myreviews" element={<MyReviews />} />
            <Route path="/newreview" element={<ReviewForm />} />{" "}
          </>
        ) : (
          ""
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
