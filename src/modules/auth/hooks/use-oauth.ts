import { User, UserOauth } from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "../store/auth-store";
import { useNavigate } from "react-router-dom";

export const useOauth = () => {
  const navigate = useNavigate();
  const setStatusAuth = useAuthStore((state) => state.setStatus);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const setOauthUser = async (token: string, user: UserOauth) => {
    setStatusAuth("authenticated");
    setToken(token);
    const userData: User = {
      full_name: user.full_name,
      email: user.email,
      user_details: {
        profile_filename: user.user_details?.profile_filename,
        role_id: 1,
        role: {
          id: 1,
          name: "admin",
          description: "system administrator",
        },
      },
    };
    setUser(userData);
    navigate("/dashboard");
  };

  return {
    setOauthUser,
  };
};
