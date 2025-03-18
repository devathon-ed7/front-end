"use client";

import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/shared/components/UI/table";
import { UserTableRow } from "./UserTableRow";
import { UserTableSkeleton } from "./UserTableSkeleton";
import { User } from "../interfaces/user.interface";

interface UserTableProps {
  users: User[];
  loading: boolean;
}

export function UserTable({ users, loading }: UserTableProps) {
  if (loading) {
    return <UserTableSkeleton />
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <UserTableRow key={user.id} user={user} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}