import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/tokenValidity";
import { Link, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const tokenExpired = isTokenExpired();
  const currentLang = location.pathname.split('/')[1] || 'en';

  if (!token || tokenExpired) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    return <Navigate to={`/${currentLang}/auth/login`} replace />;
  }

  return <>{children}</>;
}
