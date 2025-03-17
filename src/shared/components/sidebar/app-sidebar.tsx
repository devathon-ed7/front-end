"use client";
import * as React from "react";
import {
  Boxes,
  FileText,
  House,
  MonitorCog,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader } from "../UI/sidebar";
import { TeamSwitcher } from "../TeamSwitcher";
import { NavMain } from "../NavMain";
import { useTranslation } from "react-i18next"; // Importa useTranslation

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { t } = useTranslation();

  const data = {
    navMain: [
      {
        title: t("dashboard.title"),
        url: "/dashboard",
        icon: House,
        isActive: true,
      },
      {
        title: t("dashboard.transactions"),
        url: "/transaccions",
        icon: ShoppingCart,
      },
      {
        title: t("dashboard.suppliers"),
        url: "/suppliers",
        icon: FileText,
      },
      {
        title: t("dashboard.users"),
        url: "/users",
        icon: Users,
      },
      {
        title: t("dashboard.products"),
        url: "/products",
        icon: Boxes,
      },
      {
        title: t("dashboard.configuration"),
        url: "/configuration",
        icon: MonitorCog,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
};
