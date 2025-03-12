import {
  UserLogin,
  UserRegister,
} from "@/modules/users/interfaces/user.interface";
import { t } from "i18next";
import { toast } from "sonner";
import { t } from "i18next";
import {
  UserLogin,
  UserRegister,
} from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "@/modules/auth/store/auth-store";
import {
  loginService,
  registerService,
} from "@/modules/auth/services/auth-service";

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
    } catch (error: unknown) {
      if (typeof error === "string") {
        toast(error);
      } else if (error instanceof Error) {
        toast(error.message);
      } else {
        toast(t("exception.unknown_error"));
      }
    } finally {
      setOnChecking(false);
    }
  };

  const Logout = async () => {
    setStatus("not-authenticated");
    setUser(null);
    setToken("");
  };

  const Register = async (user: UserRegister) => {
    try {
      setOnChecking(true);
      const result = await registerService(user);
      setStatus("authenticated");
      setUser(result.user);
      setToken(result.token);
    } catch (error: unknown) {
      if (typeof error === "string") {
        toast(error);
      } else if (error instanceof Error) {
        toast(error.message);
      } else {
        toast(t("exception.unknown_error"));
      }
    } finally {
      setOnChecking(false);
    }
  };

  return {
    Login,
    Logout,
    Register,
  };
};
