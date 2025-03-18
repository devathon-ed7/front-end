"use client";
import { Button } from "@/shared/components/UI/button";
import { Plus } from "lucide-react";
import { useUserDialog } from "../context/UserDialogContext";

export function UserHeaderActions() {
  const { handleNewUser } = useUserDialog();

  return (
    <Button onClick={handleNewUser} className="gap-2">
      <Plus className="size-4" /> Add User
    </Button>
  );
}