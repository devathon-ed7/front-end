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
import { BlendIcon, BoxIcon, CirclePlusIcon, HomeIcon } from "lucide-react";

const main = [
  {
    name: "Home",
    uri: "home",
    icon: <HomeIcon />,
  },
  {
    name: "Categories",
    uri: "categories",
    icon: <BlendIcon />,
  },
];

const products = [
  {
    name: "Add product",
    uri: "add-product", //this change in the future
    icon: <CirclePlusIcon />,
  },
  {
    name: "Product list",
    uri: "list-product", //this change in the future
    icon: <BoxIcon />,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((link) => (
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
              {products.map((link) => (
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
