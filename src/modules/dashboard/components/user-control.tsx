
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "@/shared/components/UI/dropdown-menu";
import { Globe, LogOutIcon, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import { useAuth } from "@/modules/auth/hooks/use-auth";

import { Button } from "@/shared/components/UI/button";
import { useTheme } from "@/shared/components/theme-provider";

interface UserControlsProps {
  compact: boolean;
}

export const UserControls = ({ compact }: UserControlsProps) => {
  const { t, i18n } = useTranslation();
  const { data: user } = useCurrentUser();
  const { Logout } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };  
  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Globe size={16} />
            <span className={compact ? "hidden" : "hidden sm:inline"}>{i18n.language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("es")}>Español</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.user_details?.profile_filename} alt={user?.full_name} />
            <AvatarFallback>{user?.full_name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{user?.full_name} - {user?.user_details?.role?.name}</DropdownMenuLabel>
          <DropdownMenuItem onClick={Logout}>
            <LogOutIcon /> {t("common.logout")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};