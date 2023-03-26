import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: any) {
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
