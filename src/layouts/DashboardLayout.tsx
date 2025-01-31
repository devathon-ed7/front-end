import { Breadcrumb } from "@/components";
import { Header } from "./Header";
import { SideBar } from "@/components/Navigation/SideBar";
import { Box } from "@mui/material";
import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store";
import { FloatingMenu } from "@/components/Menu/FloatingMenu";

export const DashboardLayout = () => {
  const isVisible = useSidebarStore((state) => state.isVisible);

  return (
    <Box className="container-darshboard-layout">
      <Box className="container-dashboard-grid">
        {isVisible && <SideBar />}
        <FloatingMenu />
        <Box className="dashboard-content">
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
