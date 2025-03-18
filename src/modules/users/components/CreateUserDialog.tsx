"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { Label } from "@/shared/components/UI/label";
import { useUserDialog } from "../context/UserDialogContext";

interface CreateUserDialogProps {
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

export function CreateUserDialog({ open, onOpenChange, form, onFormChange }: CreateUserDialogProps) {
  const { handleCreateUser } = useUserDialog();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Add a new user to the system
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="create-username">Username</Label>
            <Input
              id="create-username"
              name="username"
              value={form.username}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="create-password">Password</Label>
            <Input
              id="create-password"
              name="password"
              type="password"
              value={form.password}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="create-name">Name</Label>
            <Input
              id="create-name"
              name="name"
              value={form.name}
              onChange={onFormChange}
            />
          </div>
          <div>
            <Label htmlFor="create-email">Email</Label>
            <Input
              id="create-email"
              name="email"
              type="email"
              value={form.email}
              onChange={onFormChange}
              placeholder="user@example.com"
            />
          </div>
          <div>
            <Label htmlFor="create-description">Description</Label>
            <Input
              id="create-description"
              name="description"
              value={form.description}
              onChange={onFormChange}
              placeholder="Role or position description"
            />
          </div>
          <div>
            <Label htmlFor="create-notes">Notes</Label>
            <Input
              id="create-notes"
              name="notes"
              value={form.notes}
              onChange={onFormChange}
              placeholder="Additional information"
            />
          </div>
          <div>
            <Label htmlFor="create-role">Role</Label>
            <select 
              id="create-role" 
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
          <Button onClick={handleCreateUser}>Create User</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}