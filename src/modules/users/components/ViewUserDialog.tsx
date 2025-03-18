"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { Label } from "@/shared/components/UI/label";
import { User } from "../interfaces/user.interface";

interface ViewUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
  onEdit: (user: User) => void;
}

export function ViewUserDialog({ open, onOpenChange, user, onEdit }: ViewUserDialogProps) {
  if (!user) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>
            Detailed information about this user
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.user_details?.profile_filename || undefined} />
              <AvatarFallback className="text-lg">
                {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-medium">{user.user_details?.name || user.username}</h3>
              <p className="text-sm text-muted-foreground">@{user.username}</p>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-xs">User ID</Label>
                <p className="text-sm font-medium">{user.id}</p>
              </div>
              <div className="col-span-2">
                <Label className="text-xs">Email</Label>
                <p className="text-sm font-medium">{user.user_details?.email || "-"}</p>
              </div>
            </div>
            <div>
              <Label className="text-xs">Role</Label>
              <p className="text-sm font-medium">
                {user.user_details?.role_id === 1 ? "Administrator" : "Standard User"}
              </p>
            </div>
            {user.user_details?.description && (
              <div>
                <Label className="text-xs">Description</Label>
                <p className="text-sm">{user.user_details.description}</p>
              </div>
            )}
            {user.user_details?.notes && (
              <div>
                <Label className="text-xs">Notes</Label>
                <p className="text-sm">{user.user_details.notes}</p>
              </div>
            )}
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => {
            onOpenChange(false);
            user && onEdit(user);
          }}>
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}