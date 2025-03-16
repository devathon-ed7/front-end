import { Navigate, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import RoutesWithNotFound from "./routes-with-not-found";

// Lazy load the layout itself
const ApplicationLayout = lazy(() => import("@/shared/layouts/ApplicationLayout"));

// Lazy load all page components
const DashboardPage = lazy(() => import("@/modules/dashboard/pages/DashboardPage").then(module => ({ default: module.DashboardPage })));
const TransacctionPage = lazy(() => import("@/modules/transacctions/pages/TransacctionPage").then(module => ({ default: module.TransacctionPage })));
const SuppliersPage = lazy(() => import("@/modules/suppliers/pages/SuppliersPage").then(module => ({ default: module.SuppliersPage })));
const UserPage = lazy(() => import("@/modules/users/pages/UserPage").then(module => ({ default: module.UserPage })));
const ProductPage = lazy(() => import("@/modules/products/pages/ProductPage").then(module => ({ default: module.ProductPage })));
const RolePages = lazy(() => import("@/modules/roles/pages/RolesPage").then(module => ({ default: module.RolePages })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen w-full bg-background">
    <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
);


export const PrivateRoutes = () => {
	return (
	  <RoutesWithNotFound>
		<Route path="/" element={
		  <Suspense fallback={<PageLoader />}>
			<ApplicationLayout />
		  </Suspense>
		}>
		  <Route index element={<Navigate to="/dashboard" />} />
		  <Route path="dashboard" element={
			<Suspense fallback={<PageLoader />}>
			  <DashboardPage />
			</Suspense>
		  } />
		  <Route path="transaccions" element={
			<Suspense fallback={<PageLoader />}>
			  <TransacctionPage />
			</Suspense>
		  } />
		  <Route path="suppliers" element={
			<Suspense fallback={<PageLoader />}>
			  <SuppliersPage />
			</Suspense>
		  } />
		  <Route path="users" element={
			<Suspense fallback={<PageLoader />}>
			  <UserPage />
			</Suspense>
		  } />
		  <Route path="products" element={
			<Suspense fallback={<PageLoader />}>
			  <ProductPage />
			</Suspense>
		  } />
		  <Route path="configuration" element={
			<Suspense fallback={<PageLoader />}>
			  <RolePages />
			</Suspense>
		  } />
		</Route>
	  </RoutesWithNotFound>
	);
  };
export default PrivateRoutes;
