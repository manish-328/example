import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      {/* Default page → Login */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}
