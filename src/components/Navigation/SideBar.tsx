import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { NavLink } from "@/components/Navigation/NavLink";
import { NavSection } from "@/components/Navigation/NavSection";
import {
  Home as HomeIcon,
  People as PeopleIcon,
  AssignmentInd as AssignmentIndIcon,
  Category as CategoryIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";
import "./SideBar.css";

export const SideBar = () => {
  const location = useLocation();

  return (
    <Box className="sidebar-container">
      <Box className="sidebar-header">
        {/* <img src="/favicon.svg" alt="Icon" /> */}
        <svg className="white w-8 h-8">
          <use href="/src/assets/icons.svg#logo-outline"></use>
        </svg>
        <Typography sx={{ marginLeft: "0.5em", color: "white" }}>
          Sistema de Inventario
        </Typography>
      </Box>
      <Box className="sidebar-divider">
        <Box className="sidebar-divider-line" />
      </Box>

      <NavSection>
        <NavLink
          to="/home"
          displayText="Inicio"
          isActive={location.pathname === "/home" || location.pathname === ""}
          icon={HomeIcon}
        />
        <NavLink
          to="/usuarios"
          displayText="Usuarios"
          isActive={location.pathname === "/usuarios"}
          icon={PeopleIcon}
        />
        <NavLink
          to="/roles"
          displayText="Roles"
          isActive={location.pathname === "/roles"}
          icon={AssignmentIndIcon}
        />
        <NavLink
          to="/permisos"
          displayText="Permisos"
          isActive={location.pathname === "/permisos"}
          icon={AdminPanelSettingsIcon}
        />
        <NavLink
          to="/productos"
          displayText="Productos"
          isActive={location.pathname === "/productos"}
          icon={InventoryIcon}
        />
        <NavLink
          to="/categorias"
          displayText="Categorias"
          isActive={location.pathname === "/categorias"}
          icon={CategoryIcon}
        />
      </NavSection>
    </Box>
  );
};
