"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { Badge } from "@/shared/components/UI/badge";
import { Button } from "@/shared/components/UI/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useUserDialog } from "../context/UserDialogContext";
import { User } from "../interfaces/user.interface";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const { handleViewUser, handleEditUser, handleDeleteUser } = useUserDialog();
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.user_details?.profile_filename || undefined} />
              <AvatarFallback>
                {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{user.user_details?.name || user.username}</CardTitle>
              <CardDescription>@{user.username}</CardDescription>
            </div>
          </div>
          <Badge variant="success" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:bg-green-500/20 dark:text-green-400">
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div>
            <span className="text-sm text-muted-foreground">Email:</span>
            <p className="text-sm font-medium">{user.user_details?.email || "-"}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Role:</span>
            <p className="text-sm font-medium">
              {user.user_details?.role_id === 1 ? "Administrator" : "Standard User"}
            </p>
          </div>
          {user.user_details?.description && (
            <div>
              <span className="text-sm text-muted-foreground">Description:</span>
              <p className="text-sm">{user.user_details?.description}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Badge variant="outline">{user.user_details?.role_id === 1 ? "Admin" : "User"}</Badge>
        <div className="flex gap-2">
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
      </CardFooter>
    </Card>
  );
}