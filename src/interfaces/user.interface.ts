
export interface UserLogin extends Required<Pick<User, "userName">> {
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
    profile_filename?: string | null;
}