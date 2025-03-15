"use client"
import * as React from "react"
import {
  Boxes,
  FileText,
  House,
  MonitorCog,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "../UI/sidebar"
import { TeamSwitcher } from "../TeamSwitcher"
import { NavMain } from "../NavMain"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
      isActive: true,
    },
    {
      title: "Transacciones",
      url: "/transaccions",
      icon: ShoppingCart,

    },
    {
      title: "Proveedores",
      url: "/suppliers",
      icon: FileText,

    },
    {
      title: "Usuarios",
      url: "/users",
      icon: Users,
    },
    {
      title: "Productos",
      url: "/products",
      icon: Boxes,
    },
    {
      title: "Configuracion",
      url: "/configuration",
      icon: MonitorCog,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
  )
}
