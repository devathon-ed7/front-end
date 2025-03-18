
import { UserHeaderActions } from "./UserHeaderActions";

export function UserHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">Manage your system users and their permissions</p>
      </div>
      <UserHeaderActions />
    </div>
  );
}