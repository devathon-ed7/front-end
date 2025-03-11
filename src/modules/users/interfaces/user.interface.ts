import { Roles } from "../../roles/interfaces/roles.interface";

export interface UserLogin extends Record<string, unknown> {
  email: string;
  password: string;
}

export interface UserRegister extends Record<string, unknown> {
  email: string;
  password: string;
  fullName: string;
}

export interface User {
  id?: number;
  email?: string;
  password?: string;
  fullName?: string;
  user_details?: UserDetails;
}
export interface UserDetails {
  role_id?: number;
  profile_filename?: string | null;
  role?: Roles;
  id?: number;
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

export interface UserForm {
  username: string;
  password: string;
  name: string;
  email: string;
  role_id: number;
  id: number;
}

export interface UserNewRequest {
  user: UserForm;
  file: File | null;
}