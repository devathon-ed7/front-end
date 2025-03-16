import { User } from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "../store/auth-store";

export const useExtractSession = () => {
  const setStatusAuth = useAuthStore((state) => state.setStatus);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const setSessionUser = (status: string) => {
    const sessionUser = sessionStorage.getItem("user") as User;
    const sessionToken: string = sessionStorage.getItem("token") ?? "";
    if (status === "authenticated") {
      setStatusAuth(status);
      setUser(sessionUser);
      setToken(sessionToken);
    }
  };

  return {
    setSessionUser,
  };
};
