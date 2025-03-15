import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "./routes-with-not-found";
import ApplicationLayout from "@/shared/layouts/ApplicationLayout";
import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage";
import { TransacctionPage } from '../../modules/transacctions/pages/TransacctionPage';
import { SuppliersPage } from "@/modules/suppliers/pages/SuppliersPage";
import { UserPage } from "@/modules/users/pages/UserPage";
import { ProductPage } from "@/modules/products/pages/ProductPage";
import { RolePages } from "@/modules/roles/pages/RolesPage";

export const PrivateRoutes = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<ApplicationLayout />}>
				<Route index element={<Navigate to="/dashboard" />} />
				<Route path="dashboard" element={<DashboardPage />} />
				<Route path="transaccions" element={<TransacctionPage />} />
				<Route path="suppliers" element={<SuppliersPage />} />
				<Route path="users" element={<UserPage />} />
				<Route path="products" element={<ProductPage />} />
				<Route path="configuration" element={<RolePages />} />
			</Route>
		</RoutesWithNotFound>
	);
};

export default PrivateRoutes;
