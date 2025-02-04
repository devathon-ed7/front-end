import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/Navigation/NavLink";
import { NavSection } from "@/components/Navigation/NavSection";
import { ArchiveIcon, HouseIcon, IdCardIcon, ShapesIcon, ShieldIcon, UserIcon } from "lucide-react";

export const SideBar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col bg-gray-800 text-white w-64 p-4">
      <div className="flex items-center mb-4">
        <img src="/favicon-32x32.png" alt="Icon" className="h-8 w-8" />
        <span className="ml-2 text-lg font-semibold">Sistema de Inventario</span>
      </div>
      <div className="border-b border-gray-600 mb-4"></div>

      <NavSection>
        <NavLink
          to="/home"
          displayText="Inicio"
          isActive={location.pathname === "/home" || location.pathname === ""}
          icon={HouseIcon}
        />
        <NavLink
          to="/usuarios"
          displayText="Usuarios"
          isActive={location.pathname === "/usuarios"}
          icon={UserIcon}
        />
        <NavLink
          to="/roles"
          displayText="Roles"
          isActive={location.pathname === "/roles"}
          icon={IdCardIcon}
        />
        <NavLink
          to="/permisos"
          displayText="Permisos"
          isActive={location.pathname === "/permisos"}
          icon={ShieldIcon}
        />
        <NavLink
          to="/productos"
          displayText="Productos"
          isActive={location.pathname === "/productos"}
          icon={ArchiveIcon}
        />
        <NavLink
          to="/categorias"
          displayText="Categorías"
          isActive={location.pathname === "/categorias"}
          icon={ShapesIcon}
        />
      </NavSection>
    </div>
  );
};