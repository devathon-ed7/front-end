import { API, baseUrl } from "../../constants/API";
import { UserLogin } from "../../interfaces";

export const loginService = async (user: UserLogin) => {
  try {
    const resp = await fetch(`${API + baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        ...user,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await resp;
    
  } catch (error) {
    throw (error as Error).message;
    //Error de Backend en base a conexion
  }
};
