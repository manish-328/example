import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../shared/layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
