import { NavMenu } from "@/modules/dashboard/components/nav-menu";
import { FloatingMenu } from "../components/Menu/FloatingMenu";

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
