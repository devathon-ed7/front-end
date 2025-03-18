"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { User } from "../interfaces/user.interface";

interface DeleteUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
  onConfirm: () => void;
}

export function DeleteUserDialog({ open, onOpenChange, user, onConfirm }: DeleteUserDialogProps) {
  if (!user) return null;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-destructive">Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.user_details?.profile_filename || undefined} />
              <AvatarFallback>
                {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.user_details?.name || user.username}</div>
              <div className="text-sm text-muted-foreground">@{user.username}</div>
              {user.user_details?.email && (
                <div className="text-sm text-muted-foreground">{user.user_details.email}</div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={onConfirm}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}