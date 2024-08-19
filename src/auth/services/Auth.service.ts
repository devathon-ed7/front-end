import { API, baseUrl } from "../../constants/API";
import { UserLogin } from "../../interfaces/index.interface";

export const loginService = async (user: UserLogin) => {
  try {
    const resp = await fetch(`${API + baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: user.userName,
        password: user.password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const respJson = await resp.json();
    if (!resp.ok) {
      throw new Error(respJson.error);
    }

    return respJson;
  } catch (error) {
    throw (error as Error).message;
    //Error de Backend en base a conexion
  }
};
