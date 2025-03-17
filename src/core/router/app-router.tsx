import { ReactNode, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import PrivateGuard from "./private-guard";
import PrivateRoutes from "./private-routes";
import RoutesWithNotFound from "./routes-with-not-found";

// Lazy load authentication page
const AuthPage = lazy(() => import("@/modules/auth/pages/AuthPage"));

// Loading component
const LoadingAuth = () => (
  <div className="flex items-center justify-center h-screen w-full">
    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
  </div>
);

interface AppRouterProps {
  children: ReactNode;
}

const AppRouter = ({ children }: AppRouterProps) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="auth/login" element={
          <Suspense fallback={<LoadingAuth />}>
            <AuthPage />
          </Suspense>
        } />
        <Route element={<PrivateGuard />}>
          <Route path="/*" element={<PrivateRoutes />} />
        </Route>
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  );
};

export default AppRouter;