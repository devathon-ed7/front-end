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
      const { id, username, user_details } = resp.user;
      setLogin({
        idUser: id,
        username,
        email: user_details.email,
        name: user_details.name,
        profile_filename: user_details.profile_filename,
        role: user_details.role.name,
        role_id: user_details.role_id,
      });

      //Agregar token al localStorage
      localStorage.setItem("token", resp.token);
    } catch (error) {
      snackBarElement("error", error as string);
    }
  };

  const checkAuthToken = async () => {};

  const startLogout = async () => {
    setLogout();
    localStorage.removeItem("token");
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
