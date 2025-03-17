import { Input } from "@/shared/components/UI/input";

import { SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface DesktopSearchProps {
  isTablet: boolean;
}
export const DesktopSearch = ({ isTablet }: DesktopSearchProps) => {
  const { t } = useTranslation();
  return (
  <div
    className={`relative ${
      isTablet ? "max-w-[180px]" : "max-w-md"
    } w-full mx-2 lg:mx-4 hidden md:block`}
  >
    <Input placeholder={t("dashboard.search")} className="pl-9 h-8" />
    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
  </div>
  );
};