import { ReactNode } from "react";
import PrivateGuard from "./private-guard";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import PrivateRoutes from "./private-routes";
import RoutesWithNotFound from "./routes-with-not-found";
import AuthPage  from "@/pages/Auth/Auth-page";

interface AppRouterProps {
  children: ReactNode;
}

const AppRouter = ({ children }: AppRouterProps) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="auth/login" element={<AuthPage />} />
        <Route element={<PrivateGuard />}>
          <Route path="/*" element={<PrivateRoutes />} />
        </Route>
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;
