import { Breadcrumb } from "@/components";
import { Header } from "./Header";
import { SideBar } from "@/components/Navigation/SideBar";
import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";
export const DashboardLayout = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          height: "100%",
        }}
      >
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
