import { Breadcrumb } from "@/components";
import { Header } from "./Header";
import { SideBar } from "@/components/Navigation/SideBar";
import { Box } from "@mui/material";
import "./DashboardLayout.css";

import { Outlet } from "react-router-dom";
export const DashboardLayout = () => {
  return (
    <Box className="container-darshboard-layout">
      <Box className="container-dashboard-grid">
        <SideBar />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <Box sx={{ flex: 1, padding: 2 }}>
            <Breadcrumb />
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
