import { Roles } from "./roles.interface";

export interface UserLogin {
  username: string;
  password: string;
}
export interface User {
  id?: number;
  username?: string;
  password?: string;
  user_details?: UserDetails;
}
export interface UserDetails {
  name?: string;
  email?: string;
  role_id?: number;
  profile_filename?: string | null;
  role?: Roles;
}

export interface UsersReponse {
  users: User[];
}

export interface UsersStore {
  users: User[];
  setUsers: (value: User[]) => void;
}

export interface UserDatagrid {
  id: number;
  username: string;
  name: string | null;
  email: string | null;
  role_id: number | null;
  role: string | null;
}

export interface NewUserForm{
  username: undefined | string;
  password: undefined | string;
  name: undefined | string;
  email: undefined | string;
  role_id: undefined | number;
}

export interface UserNewRequest {
  user: NewUserForm;
  file: File | null;
}