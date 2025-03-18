"use client";

import { TabsTrigger } from "@/shared/components/UI/tabs";
import { Users, MoreHorizontal } from "lucide-react";

export function UserTabsTriggers() {
  return (
    <>
      <TabsTrigger value="list" className="flex gap-2 items-center">
        <Users className="h-4 w-4" />
        List View
      </TabsTrigger>
      <TabsTrigger value="grid" className="flex gap-2 items-center">
        <MoreHorizontal className="h-4 w-4" />
        Grid View
      </TabsTrigger>
    </>
  );
}