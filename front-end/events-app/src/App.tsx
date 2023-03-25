import { Navigate, Route, Routes } from "react-router-dom";
import { Events } from "./components/Events";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NotFoundPage } from "./components/NotFoundPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/events" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
