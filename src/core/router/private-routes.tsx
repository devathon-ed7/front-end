import { DashboardLayout } from "@/shared/layouts";
import { HomePage } from "@/shared/pages";
import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "./routes-with-not-found";

export const PrivateRoutes = () => {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<DashboardLayout />}>
				<Route index element={<Navigate to="/home" />} />
				<Route path="home" element={<HomePage />} />
				{/*<Route path="usuarios" element={<UserPage />} /> */}
				{/*<Route path="usuarios/nuevo" element={<UserNewPage />} />*/}
				{/*<Route path="usuarios/editar/:id" element={<UserEditPage />} /> */}
				{/*<Route path="roles" element={<RolePages />} /> */}
				{/*<Route path="permisos" element={<PermissionPage />} />*/}
				{/*<Route path="productos" element={<ProductPage />} /> */}
				{/*<Route path="productos/nuevo" element={<ProductNew />} /> */}
				{/*<Route path="productos/editar/:id" element={<ProductEdit />} /> */}
				{/*<Route path="categorias" element={<CategoryPage />} />*/}
			</Route>
		</RoutesWithNotFound>
	);
};

export default PrivateRoutes;
