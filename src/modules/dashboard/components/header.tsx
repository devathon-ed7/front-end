import { Breadcrumb, BreadcrumbList } from "@/shared/components/UI/breadcrumb";
import { Separator } from "@/shared/components/UI/separator";
import PageTitle from "./page-title";
import { UserControls } from "./user-control";
import { DesktopSearch } from "@/modules/dashboard/components/desktop-search";
import { Fragment } from "react/jsx-runtime";
import { MobileSearch } from "./mobile-search";

interface HeaderProps {
  isMobile: boolean | undefined;
  isTablet: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
}

export const Header = ({
  isMobile,
  isTablet,
  setIsSearchOpen,
  isSearchOpen,
}: HeaderProps) => {
  return (
    <header className="flex h-14 items-center gap-2 border-b dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center gap-2 px-4 w-full">
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="w-full">
          <BreadcrumbList className="flex items-center justify-between w-full">
            <h1 className="font-bold text-lg truncate">
              <PageTitle />
            </h1>
            <div className="flex items-center ml-auto">
              {isMobile ? (
                <Fragment>
                  <MobileSearch
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                  />
                  <UserControls compact={isMobile} />
                </Fragment>
              ) : (
                <Fragment>
                  <DesktopSearch isTablet={isTablet} />
                  <UserControls compact={isTablet} />
                </Fragment>
              )}
            </div>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};






