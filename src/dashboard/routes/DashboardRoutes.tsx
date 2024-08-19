import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
