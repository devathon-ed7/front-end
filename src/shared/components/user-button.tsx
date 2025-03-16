import { useAuth } from "@/modules/auth/hooks/use-auth";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import { Avatar, AvatarFallback } from "@/shared/components/UI/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/UI/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Loader, LogOutIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const UserButton = () => {
  const { Logout } = useAuth();
  const { t } = useTranslation();
  const { data, isLoading } = useCurrentUser();
  if (isLoading) {
    return <Loader className="size-4 animated-spin text-muted-foreground" />;
  }
  if (!data) {
    return null;
  }

  const { full_name, user_details } = data;
  const image = user_details?.profile_filename?.toString();
  const avatarFallback = full_name ? full_name.charAt(0).toUpperCase() : "";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opcity-75 transition">
          <AvatarImage
            src={image}
            alt={full_name}
            referrerPolicy="no-referrer"
          />
          <AvatarFallback className="bg-sky-500 text-white">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="center" side="bottom">
        <DropdownMenuItem onClick={() => Logout()} className="h-10">
          <LogOutIcon className="size-4 mr-2" />
          {t("common.logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
