import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../shared/layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      {/* Login route without sidebar/header */}
      <Route path="/login" element={<LoginPage />} />

      {/* Login route without sidebar/header */}
      <Route path="/homepage" element={<HomePage />} />

      {/* Protected dashboard routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
