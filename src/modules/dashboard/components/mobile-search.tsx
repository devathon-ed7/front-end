import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/UI/sheet";
import { SearchIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface MobileSearchProps {
  isSearchOpen: boolean;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileSearch = ({
  isSearchOpen,
  setIsSearchOpen,
}: MobileSearchProps) => {
  const { t } = useTranslation();
  return (
    <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSearchOpen(true)}
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-auto max-h-[40vh] pt-10">
        <div className="relative w-full">
          <Input
            autoFocus
            placeholder={t("dashboard.search")}
            className="pl-9 h-10 w-full"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsSearchOpen(false)}
          >
           
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
