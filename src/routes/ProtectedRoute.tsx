import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/tokenValidity";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  const tokenExpired = isTokenExpired();

  if (!token || tokenExpired) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}
