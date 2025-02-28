import { loginService, registerService } from "@/services/auth-service";
import { UserLogin, UserRegister } from "@/interfaces";
import { useAuthStore } from "@/store/auth-store";
import { toast } from "sonner";


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
      if (typeof error === 'string') {
        toast(error); 
      } else if (error instanceof Error) {
        toast(error.message); 
      } else {
        toast("Ocurrió un error desconocido."); 
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
      if (typeof error === 'string') {
        toast(error); 
      } else if (error instanceof Error) {
        toast(error.message); 
      } else {
        toast("Ocurrió un error desconocido."); 
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
