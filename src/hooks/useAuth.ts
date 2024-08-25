import { loginService } from "@/services/auth.service";
import { snackBarElement } from "@/utils/snackBarElement";
import { UserLogin } from "@/interfaces";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const setOnChecking = useAuthStore((state) => state.setChecking);
  const setStatus = useAuthStore((state) => state.setStatus);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const Login = async (user: UserLogin) => {
    try {
      setOnChecking(true);
      const result = await loginService(user);
      setStatus("authenticated");
      setUser(result.user);
      setToken(result.token);
    } catch (error) {
      snackBarElement("error", error as string);
    } finally {
      setOnChecking(false);
    }
  };

  const Logout = async () => {
    setStatus("not-authenticated");
    setUser(null);
    setToken("");
  };

  return {
    Login,
    Logout,
  };
};
