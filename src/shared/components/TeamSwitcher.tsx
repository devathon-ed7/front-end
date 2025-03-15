"use client"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./UI/sidebar"
import { DropdownMenu } from "./UI/dropdown-menu"
import { GalleryVerticalEnd } from "lucide-react"

export function TeamSwitcher() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <GalleryVerticalEnd size={20} />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                System Inventary
                            </span>
                            <span className="truncate text-xs">Bussness</span>
                        </div>
                    </SidebarMenuButton>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
