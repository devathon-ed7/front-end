import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/shared/components/UI/sidebar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Header } from "@/modules/dashboard/components/header";

export default function ApplicationLayout() {
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header
          isMobile={isMobile}
          isTablet={isTablet}
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
        
        <div className="p-3 sm:p-4 lg:p-6 dark:bg-gray-900 min-h-[calc(100vh-3.5rem)]">
          
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
