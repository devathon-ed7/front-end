import { User } from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "../store/auth-store";
import { useNavigate } from "react-router-dom";

export const useOauth = () => {
  const navigate = useNavigate();
  const setStatusAuth = useAuthStore((state) => state.setStatus);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const setOauthUser = async (token: string, user: User) => {
    setStatusAuth("authenticated");
    setToken(token);
    setUser(user);
    navigate("/dashboard");
  };

  return {
    setOauthUser,
  };
};
