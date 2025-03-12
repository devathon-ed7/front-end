import { useAuth } from "@/modules/auth/hooks/useAuth";
import { Avatar, AvatarFallback } from "@/shared/components/UI/avatar";
import { Button } from "@/shared/components/UI/button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppMenu } from "./app-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback } from "@/shared/components/UI/avatar";
import { Button } from "@/shared/components/UI/button";
import { useAuth } from "@/modules/auth/hooks/use-auth";

export const NavMenu = () => {
  const imageUrlRef = useRef("/android-chrome-512x512.png");
  const imageNameRef = useRef("logo");
  const { Logout } = useAuth();
  const navigate = useNavigate();
  const user = { name: "John Doe" };
  const handleLogOut = async () => {
    await Logout();
    navigate("/auth/login");
  };

  return (
    <div className="w-full bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <img
              src={imageUrlRef.current}
              alt={imageNameRef.current}
              className="w-8 h-8"
            />
            {/* Desktop Menu */}
            <AppMenu className="hidden md:block" />
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <ThemeToggle />

            <Button
              onClick={handleLogOut}
              variant="outline"
              className="hidden sm:inline-flex"
            >
              Log out
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
