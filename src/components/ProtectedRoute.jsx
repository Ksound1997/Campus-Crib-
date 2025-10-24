import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("User"); // or check your auth state

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
