import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { UserPage } from "../pages/UserPage";
import { DashboardLayout } from "../layout/DashboardLayout";
import { RolePages } from "../pages/RolePages";
import { PermissionPage } from '../pages/PermissionPage';
import { ProductPage } from "../pages/ProductPage";
import { CategoryPage } from "../pages/CategoryPage";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="usuarios" element={<UserPage />} />
        <Route path="roles" element={<RolePages />} />
        <Route path="permisos" element={<PermissionPage />} />
        <Route path="productos" element={<ProductPage />} />
        <Route path="categorias" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};