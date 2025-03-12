import { ThemeToggle } from "@/shared/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/UI/sidebar";
import { t } from "i18next";
import { BlendIcon, BoxIcon, CirclePlusIcon, HomeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const getMainLinks = () => [
  {
    name: t("sidebar.home"),
    uri: "home",
    icon: <HomeIcon />,
  },
  {
    name: t("sidebar.categories"),
    uri: "categories",
    icon: <BlendIcon />,
  },
];

const getProductLinks = () => [
  {
    name: t("sidebar.addProduct"),
    uri: "add-product", //this change in the future
    icon: <CirclePlusIcon />,
  },
  {
    name: t("sidebar.listProduct"),
    uri: "list-product", //this change in the future
    icon: <BoxIcon />,
  },
];

export const AppSidebar = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getMainLinks().map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild>
                    <a href={link.uri}>
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>PRODUCTS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getProductLinks().map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild>
                    <a href={link.uri}>
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <ThemeToggle />

              {currentLanguage === "en" ? (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button onClick={() => changeLanguage("es")}>
                      English
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <button onClick={() => changeLanguage("en")}>
                      Español
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
