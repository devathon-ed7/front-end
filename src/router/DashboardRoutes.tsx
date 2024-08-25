import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import {
  HomePage,
  PermissionPage,
  ProductPage,
  ProductNew,
  ProductEdit,
} from "@/pages";
import { CategoryPage } from "@/pages/Category.page";
import { RolePages } from "@/pages/Role.pages";
import { UserNewPage, UserEditPage, UserPage } from "@/pages/User";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="usuarios" element={<UserPage />} />
        <Route path="usuarios/nuevo" element={<UserNewPage />} />
        <Route path="usuarios/editar/:id" element={<UserEditPage />} />
        <Route path="roles" element={<RolePages />} />
        <Route path="permisos" element={<PermissionPage />} />
        <Route path="productos" element={<ProductPage />} />
        <Route path="productos/nuevo" element={<ProductNew />} />
        <Route path="productos/editar/:id" element={<ProductEdit />} />
        <Route path="categorias" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Route>
    </Routes>
  );
};
