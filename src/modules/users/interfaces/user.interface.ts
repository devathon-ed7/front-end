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

export interface UserDetails {
    id?: number;
    name?: string;
    email?: string;
    description?: string;
    notes?: string;
    profile_filename?: string | null;
    user_account_id?: number;
    role_id?: number;
    role?: Roles;
}

export interface User {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    full_name?: string;
    user_details?: UserDetails;
}

// Add this to make UserForm public
export interface UserForm {
    username: string;
    password: string;
    name: string;
    email: string;
    description: string;
    notes: string;
    role_id: number;
    id: number;  
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

export interface UserNewRequest {
    user: UserForm;
    file: File | null;
}