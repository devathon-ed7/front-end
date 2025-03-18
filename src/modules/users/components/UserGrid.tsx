"use client";

import { User } from "../interfaces/user.interface";
import { UserCard } from "./UserCard";
import { UserGridSkeleton } from "./UserGridSkeleton";

interface UserGridProps {
  users: User[];
  loading: boolean;
}

export function UserGrid({ users, loading }: UserGridProps) {
  if (loading) {
    return <UserGridSkeleton />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.length === 0 ? (
        <div className="col-span-full text-center py-10 text-muted-foreground">
          No users found.
        </div>
      ) : (
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      )}
    </div>
  );
}