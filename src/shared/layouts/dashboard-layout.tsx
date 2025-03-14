import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/UI/sidebar";
import { UserButton } from "@/modules/dashboard/components/user-button";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-col grow w-full h-full m-0 p-0">
        <div className="flex justify-between">
          <SidebarTrigger />
          <div className="flex m-4">
            <UserButton />
          </div>
          
        </div>

       
          <Outlet />
        
      </div>
    </SidebarProvider>
  );
};
