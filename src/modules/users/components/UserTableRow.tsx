"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { Badge } from "@/shared/components/UI/badge";
import { Button } from "@/shared/components/UI/button";
import { TableCell, TableRow } from "@/shared/components/UI/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useUserDialog } from "../context/UserDialogContext";
import { User } from "../interfaces/user.interface";

interface UserTableRowProps {
  user: User;
}

export function UserTableRow({ user }: UserTableRowProps) {
  const { handleViewUser, handleEditUser, handleDeleteUser } = useUserDialog();

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.user_details?.profile_filename || undefined} />
            <AvatarFallback>
              {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.user_details?.name || user.username}</div>
            <div className="text-xs text-muted-foreground">@{user.username}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{user.user_details?.email || "-"}</TableCell>
      <TableCell>
        <Badge variant="outline">
          {user.user_details?.role_id === 1 ? "Admin" : "User"}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="success" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:bg-green-500/20 dark:text-green-400">
          Active
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleViewUser(user)}
          >
            <Eye className="h-4 w-4 text-primary" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleEditUser(user)}
          >
            <Pencil className="h-4 w-4 text-blue-500" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleDeleteUser(user)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}