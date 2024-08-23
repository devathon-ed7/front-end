import { User } from "@/interfaces";

export interface NewUserForm
  extends Pick<User, "username" | "name" | "email" | "role_id"> {
  password: string;
}
