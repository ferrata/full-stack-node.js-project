import { Navigate, Route, Routes } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { EventDetails } from "./components/EventDetails";
import { Events } from "./components/Events";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Logout } from "./components/Logout";
import { NotFoundPage } from "./components/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Users } from "./components/Users";

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Navigate to="/events" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <PrivateRoute>
              <EventDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/create"
          element={
            <PrivateRoute>
              <CreateUser />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
