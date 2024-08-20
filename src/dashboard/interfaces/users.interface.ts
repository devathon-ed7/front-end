import { User } from "@/interfaces/index.interface";

export interface NewUserForm
  extends Pick<User, "username" | "name" | "email" | "role_id"> {
  password: string;
}
