import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const MainRouter = () => {
  let status = "not-authenticated"; //TODO: Crear estado para manejar datos de la sesion con redux toolkit

  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<Navigate to="/auth" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<DashboardRoutes />} />
          </>
        )}
      </Routes>
    </>
  );
};
