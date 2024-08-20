import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import {
  HomePage,
  PermissionPage,
  ProductPage,
  ProductNew, 
  ProductEdit,
  UserPage
} from "../pages";
import { NewUserPage } from "../pages/NewUserPage";
import { CategoryPage } from '../pages/CategoryPage';
import { RolePages } from '../pages/RolePages';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="usuarios" element={<UserPage />} />
        <Route path="usuarios/nuevo" element={<NewUserPage />} />
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