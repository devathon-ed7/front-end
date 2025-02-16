import { Header } from "./Header";
import { NavMenu } from "@/features/dashboard/components/nav-menu";
import "./dashboard-layout.css";
import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store";
import { FloatingMenu } from "@/components/Menu/FloatingMenu";

export const DashboardLayout = () => {

  return (
    <div className="container-darshboard-layout ">
      <div className="container-dashboard-grid">
        <NavMenu />
        
        <FloatingMenu />
        {/*
        <div className="dashboard-content">
          <Header />
          <div className="flex p-2">
            Breadcumb
            <Outlet />
          </div>
        </div>
        */}
      </div>
    </div>
  );
};
