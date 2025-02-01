import { useAuthStore } from "@/store";
import { Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./auth-routes";
import { DashboardRoutes } from "./dashboard-routes";

const renderRoutes = () => {
  const status = useAuthStore((state) => state.status);
  switch (status) {
    case "not-authenticated":
      return (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth" replace />} />
        </>
      );
    case "authenticated":
      return <Route path="/*" element={<DashboardRoutes />} />;
    case "checking":
      return null;
    default:
      return <Navigate to="/auth" replace />; 
  }
};

export default renderRoutes;