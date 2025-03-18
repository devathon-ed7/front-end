"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { Label } from "@/shared/components/UI/label";
import { useUserDialog } from "../context/UserDialogContext";

interface EditUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  form: {
    username: string;
    password: string;
    name: string;
    email: string;
    description: string;
    notes: string;
    role_id: number;
  };
  onFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EditUserDialog({ open, onOpenChange, form, onFormChange }: EditUserDialogProps) {
  const { handleUpdateUser } = useUserDialog();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update user information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={form.username}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password (leave blank to keep unchanged)</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              value={form.description}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Input
              id="notes"
              name="notes"
              value={form.notes}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <select 
              id="role" 
              name="role_id" 
              className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none"
              value={form.role_id}
              onChange={(e) => {
                const event = {
                  target: {
                    name: 'role_id',
                    value: parseInt(e.target.value)
                  }
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onFormChange(event);
              }}
            >
              <option value={1}>Administrator</option>
              <option value={2}>Standard User</option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="submit" onClick={handleUpdateUser}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}