import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { toast } from "sonner";
import {
  UserLogin,
  UserRegister,
} from "@/modules/users/interfaces/user.interface";
import { useAuthStore } from "@/modules/auth/store/auth-store";
import { authService } from "@/modules/auth/services/auth-service";


export const useAuth = () => {
  const navigate = useNavigate();
  const setOnChecking = useAuthStore((state) => state.setChecking);
  const setStatus = useAuthStore((state) => state.setStatus);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);


  const loginMutation = useMutation({
    mutationFn: async (user: UserLogin) => {
      setOnChecking(true);
      const result = await authService.login(user);
      return result;
    },
    onSuccess: (result) => {
      setStatus("authenticated");
      setUser(result.user);
      setToken(result.token);
      navigate("/home");
    },
    onError: (error: unknown) => {
      if (typeof error === "string") {
        toast(error);
      } else if (error instanceof Error) {
        toast(error.message);
      } else {
        toast(t("exception.unknown_error"));
      }
    },
    onSettled: () => {
      setOnChecking(false);
    },
  }); //loginMutation

  const registerMutation = useMutation({
    mutationFn: async (user: UserRegister) => {
      setOnChecking(true);
      return await authService.register(user);
      
    },
    onSuccess: (result) => {
      setStatus("authenticated");
      setUser(result.user);
      setToken(result.token);
    },
    onError: (error: unknown) => {
      if (typeof error === "string") {
        toast(error);
      } else if (error instanceof Error) {
        toast(error.message);
      } else {
        toast(t("exception.unknown_error"));
      }
    },
    onSettled: () => {
      setOnChecking(false);
    },
  }); //registerMutation

  const Login = (user: UserLogin) => {
    loginMutation.mutate(user);
  };

  const Logout = async () => {
    setStatus("not-authenticated");
    setUser(null);
    setToken("");
  };

  const Register = (user: UserRegister) => {
    registerMutation.mutate(user);
  };

  return {
    Login,
    Logout,
    Register,
    isPending: loginMutation.isPending || registerMutation.isPending,
    isSuccess: loginMutation.isSuccess || registerMutation.isSuccess,
    error: loginMutation.error || registerMutation.error,
  };
};
