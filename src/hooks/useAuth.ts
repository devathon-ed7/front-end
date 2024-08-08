import { loginService } from "../auth/services/Auth.service";
import { snackBarElement } from "../helpers/snackBarElement";
import { UserLogin } from "../interfaces/index.interface";
import { useAuthStore } from "../store/auth/authStore";

export const useAuth = () => {
  const {
    status,
    errorMessage,
    checking,
    user,
    setLogin,
    setLogout,
    setOnChecking,
  } = useAuthStore();

  const startLogin = async (user: UserLogin) => {
    try {
      setOnChecking();
      const resp = await loginService(user);
      if (resp.ok !== true) {
        setLogout(resp.msg);
        setTimeout(() => {
          setLogout();
        }, 1);
        return;
      }

      setLogin(resp.user);

      //Agregar token al localStorage
      sessionStorage.setItem("token", resp.token);
    } catch (error) {
      console.log(user);
      snackBarElement("error", error as string);
    }
  };

  const checkAuthToken = async () => {};

  const startLogout = async () => {
    // setLogout()
    sessionStorage.removeItem("token");
  };

  return {
    //Properties
    status,
    errorMessage,
    checking,
    user,
    //Methods
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
