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
    <div className="container-darshboard-layout">
      <div className="container-dashboard-grid">
        {isVisible && <SideBar />}
        <FloatingMenu />
        <div className="dashboard-content">
          <Header />
          <div className="flex p-2">
            BreadCumb
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
