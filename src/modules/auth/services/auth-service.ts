import { apiPost } from "@/core/config/axiosConfig";
import { handleError } from "@/core/utils/handle-error";
import {
  User,
  UserLogin,
  UserRegister,
} from "@/modules/users/interfaces/user.interface";
interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  login: async (user: UserLogin): Promise<AuthResponse> => {
    try {
      return await apiPost<AuthResponse>("/auth/login", user);
    } catch (error) {
      throw new Error(handleError(error));
    }
  },
  register: async (user: UserRegister): Promise<AuthResponse> => {
    try {
      return await apiPost<AuthResponse>("/auth/register", user);
    } catch (error) {
      throw new Error(handleError(error));
    }
  },
};

export default authService;
