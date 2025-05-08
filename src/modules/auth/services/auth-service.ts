import { apiPost } from "@/core/config/axiosConfig";
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
      return await apiPost<AuthResponse>("/auth/signin", user);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  register: async (user: UserRegister): Promise<AuthResponse> => {
    try {
      return await apiPost<AuthResponse>("/auth/signup", user);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authService;
