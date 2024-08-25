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
  role?: string;
  role_id?: string;
  profile_filename?: string | null;
}
