// components/AuthRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />; // Redirect to dashboard if already logged in
  }

  return children;
};

export default AuthRoute;
