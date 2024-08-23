import { Backdrop, CircularProgress } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { useAuthStore } from "@/store/authStore";

export const MainRouter = () => {
  const status = useAuthStore((state) => state.status);

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
      {status === "checking" && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};
