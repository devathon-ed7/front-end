import { Box, Typography } from "@mui/material";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CategoryIcon from "@mui/icons-material/Category";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InventoryIcon from '@mui/icons-material/Inventory';

export const SideBar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "100%",
        width: "250px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0.1875em",
          backgroundColor: "#252627",
          margin:'0'
        }}
      >
       <img src="/favicon.svg" alt="Icon"  />
        <Typography  sx={{ marginLeft: "0.5em", color: "white" }}>
          Sistema de Inventario
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "0.02em",
          backgroundColor: "#252627",
        }}
      >
        <Box
          sx={{
            width: "81%",
            height: "0.125em",
            backgroundColor: "#858586",
          }}
        />
      </Box>
      <NavSection>
        <NavLink
          to="/"
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