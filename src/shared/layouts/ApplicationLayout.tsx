import { AppSidebar } from "@/shared/components/sidebar/app-sidebar";
import { Breadcrumb, BreadcrumbList } from "@/shared/components/UI/breadcrumb";
import { Separator } from "@/shared/components/UI/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/UI/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Globe, Moon, SearchIcon, Sun, XIcon } from "lucide-react";
import { Button } from "../components/UI/button";
import { useTheme } from "../hooks/useTheme";
import { Avatar, AvatarFallback, AvatarImage } from "../components/UI/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../components/UI/dropdown-menu";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "../components/UI/sheet";
import { Input } from "../components/UI/input";
import { UserButton } from "../components/user-button";
import { useTranslation } from "react-i18next";

type PageTitleMap = {
  [key: string]: string;
};

const TABLET_BREAKPOINT = 1024;

export default function ApplicationLayout() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < TABLET_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPageTitle = (): string => {
    const location = useLocation();

    const pageTitles: PageTitleMap = {
      "/dashboard": "Dashboard",
      "/transaccions": "Transacciones",
      "/suppliers": "Proveedores",
      "/users": "Usuarios",
      "/products": "Productos",
      "/configuration": "Configuracion",
    };

    if (pageTitles[location.pathname]) {
      return pageTitles[location.pathname];
    }

    const path = Object.keys(pageTitles).find(
      (route) => location.pathname.includes(route) && route !== "/dashboard"
    );

    return path ? pageTitles[path] : "Dashboard";
  };

  const { theme, toggleTheme } = useTheme();

  const UserControls = ({ compact = false }) => (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full w-8 h-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
      >
        {theme === "dark" ? (
          <Sun
            size={16}
            className="text-amber-400 hover:text-amber-500 transition-colors"
          />
        ) : (
          <Moon
            size={16}
            className="text-indigo-600 hover:text-indigo-700 transition-colors"
          />
        )}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1.5 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 ${
              compact ? "px-2" : ""
            }`}
          >
            <Globe size={16} className="text-gray-600 dark:text-gray-300" />
            <span className={compact ? "hidden" : "hidden sm:inline"}>
              {currentLanguage === "es" ? "Español" : "English"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("es")}>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {!compact && (
        <div className="hidden sm:flex flex-col text-right">
          <span className="font-semibold text-[#303972] dark:text-white">
            Ray
          </span>
          <span className="text-xs text-[#A098AE] dark:text-gray-400">
            Admin
          </span>
        </div>
      )}

      <UserButton />
    </>
  );

  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb className="w-full">
              <BreadcrumbList className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#303972] dark:text-gray-100 truncate">
                  {getPageTitle()}
                </h1>

                <div className="flex items-center ml-auto">
                  {!isMobile ? (
                    <div
                      className={`relative ${
                        isTablet ? "max-w-[180px]" : "max-w-md"
                      } w-full mx-2 lg:mx-4 hidden md:block`}
                    >
                      <Input
                        placeholder="Buscar..."
                        className="pl-9 h-8 dark:bg-gray-900 dark:border-gray-700 text-sm"
                      />
                      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  ) : (
                    <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="md:hidden"
                        >
                          <SearchIcon className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent
                        side="top"
                        className="h-auto max-h-[40vh] pt-10"
                      >
                        <div className="relative w-full pt-4">
                          <Input
                            autoFocus
                            placeholder="Buscar..."
                            className="pl-9 h-10 w-full"
                          />
                          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  )}

                  {isMobile ? (
                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full w-8 h-8"
                      >
                        {theme === "dark" ? (
                          <Sun size={16} className="text-amber-400" />
                        ) : (
                          <Moon size={16} className="text-indigo-600" />
                        )}
                      </Button>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>RY</AvatarFallback>
                            </Avatar>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Globe size={16} />
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-1">
                                {currentLanguage === "es"
                                  ? "Español"
                                  : "English"}
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() => setLanguage("es")}
                                >
                                  Español
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setLanguage("en")}
                                >
                                  English
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </DropdownMenuItem>
                          <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col">
                              <span className="font-semibold">Ray</span>
                              <span className="text-xs text-muted-foreground">
                                Admin
                              </span>
                            </div>
                          </DropdownMenuLabel>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : isTablet ? (
                    <div className="flex items-center gap-2">
                      <UserControls compact={true} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <UserControls />
                    </div>
                  )}
                </div>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="p-3 sm:p-4 lg:p-6 dark:bg-gray-900 min-h-[calc(100vh-3.5rem)]">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
