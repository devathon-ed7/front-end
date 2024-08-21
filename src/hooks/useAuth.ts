import { loginService } from "../auth/services/Auth.service";
import { snackBarElement } from "../helpers/snackBarElement";
import { UserLogin } from "../interfaces";
import { useAuthStore } from "../store/auth/authStore";

export const useAuth = () => {
  const setOnChecking =  useAuthStore( state => state.setChecking);
  const setStatus =  useAuthStore( state => state.setStatus);
  const setUser =  useAuthStore( state => state.setUser);
  const setToken =  useAuthStore( state => state.setToken);

  const Login = async (user: UserLogin) => {
    try {
      setOnChecking(true);
      const resp = await loginService(user);
      if (resp.status === 200) {
        const respJson = await resp.json();
        const user = respJson.user;
        const token = respJson.token;
        setStatus("authenticated");
        setUser(user);
        setToken(token);

      }
    } catch (error) {
      snackBarElement("error", error as string);
    }
  };

  const Logout = async () => {
    setStatus("not-authenticated");
    setUser(undefined);
    setToken(undefined);
  };

  return {
    Login,
    Logout,
  };
};
