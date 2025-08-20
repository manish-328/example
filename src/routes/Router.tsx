import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../shared/layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return (
    <Routes>
      {/* Login route without sidebar/header */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected dashboard routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
