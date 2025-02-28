import { API, baseUrl } from "@/constants/API";
import { UserLogin, UserRegister } from "@/interfaces";

const apiRequest = async (url: string, options: RequestInit) => {
  try {
    const resp = await fetch(url, options);
    if (!resp.ok) {
      let errorMessage;

      switch (resp.status) {
        case 401:
        case 404:
          errorMessage = "Usuario o contraseña incorrectos.";
          break;
        case 400:
          errorMessage = "La solicitud es inválida.";
          break;
        default:
          errorMessage = "Ocurrió un error desconocido.";
      }

      throw new Error(errorMessage);
    }

    const result = await resp.json();

    if (!result.user || !result.token) {
      throw new Error("Respuesta inválida del servidor.");
    }
    
    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido.";
    throw new Error(message);
  }
};

export const loginService = async (user: UserLogin) => {
  const url = `${API + baseUrl}/auth/login`;
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await apiRequest(url, options);
};

export const registerService = async (user: UserRegister) => {
  const url = `${API + baseUrl}/auth/register`;
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return await apiRequest(url, options);
};