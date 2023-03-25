import { Navigate } from "react-router-dom";

export const Events = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <h1>Events</h1>;
};
