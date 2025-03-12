import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/UI/sidebar";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-col grow w-full h-full">
        <SidebarTrigger />
        <div className="flex p-2">
          Breadcumb
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};
