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
    if (!resp.ok) {
      if (resp.status === 401 || resp.status === 404) {
        throw new Error("Usuario o contraseña incorrectos.");
      }
      if (resp.status === 400) {
        throw new Error("La solicitud es inválida.");
      }

      throw new Error("Ocurrió un error desconocido.");
    }

    return await resp.json();
  } catch (error) {
    throw (error as Error).message;
    //Error de Backend en base a conexion
  }
};
