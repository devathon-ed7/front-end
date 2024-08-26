import { API, baseUrl } from "@/constants/API";
import { Roles } from "@/interfaces";
import { getTokenFromSessionStorage } from "@/utils/getToken";

const getRoles = async (): Promise<Roles[]> => {
  try {
    const token = getTokenFromSessionStorage(); // Llamada a la función de extracción

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/roles`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const respJson = await resp.json();
    if (!resp.ok) {
      throw new Error(respJson.error);
    }

    return respJson;
  } catch (error) {
    throw (error as Error).message;
  }
};

export default {
  getRoles,
};
