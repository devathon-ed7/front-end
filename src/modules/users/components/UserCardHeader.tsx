"use client";

import { CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { Search, Filter, Download } from "lucide-react";
import { Input } from "@/shared/components/UI/input";
import { Button } from "@/shared/components/UI/button";
import { useUserSearch } from "../context/UserSearchContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/shared/components/UI/dropdown-menu";

export function UserCardHeader() {
  const { searchQuery, setSearchQuery } = useUserSearch();
  
  return (
    <CardHeader className="pb-2">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <CardTitle>All Users</CardTitle>
          <CardDescription>A list of all users in your system.</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-8 w-[200px] md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sort by Name</DropdownMenuItem>
              <DropdownMenuItem>Sort by Date</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Filter by Role</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}