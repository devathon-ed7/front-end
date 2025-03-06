export interface Roles {
  id: number;
  name: string;
  description: string;
}

export interface RoleStore {
  roles: Roles[];
  setRoles: (value: Roles[]) => void;
}
