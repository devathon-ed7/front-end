export interface AuthState {
  checking: boolean;
  errorMessage: string | undefined;
  status: StatusSession;
  user: User | undefined;
}

export type StatusSession = "authenticated" | "not-authenticated" | "checking";

export interface UserLogin extends Required<Pick<User, "username">> {
  password: string;
}

export interface User extends UserDetails {
  id?: string;
  idUser?: string;
  username?: string;
}

export interface UserDetails {
  name?: string;
  email?: string;
  role?: string;
  role_id?: string;
}
