import { API, baseUrl } from "@/constants/API";
import { Roles } from "@/interfaces";

const getTokenFromSessionStorage = (): string | null => {
  const authStore = sessionStorage.getItem("auth-store");
  if (!authStore) return null;

  try {
    const parsedStore = JSON.parse(authStore);
    return parsedStore?.state.token || null; // Ajusta según la estructura de tu objeto
  } catch (error) {
    console.error("Error al parsear el auth-store:", error);
    return null;
  }
};

export const getListUsersService = async () => {
  try {
    const token = getTokenFromSessionStorage(); // Llamada a la función de extracción

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }

    const resp = await fetch(`${API + baseUrl}/users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    //Error de Backend en base a conexion
  }
};

export const newUserService = async (formData: FormData) => {
  try {
    const token = getTokenFromSessionStorage(); // Llamada a la función de extracción

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/users`, {
      method: "POST",
      body: formData,
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
    //Error de Backend en base a conexion
  }
};

export const deleteUserByIdService = async (id: string) => {
  try {
    const token = getTokenFromSessionStorage(); // Llamada a la función de extracción

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (!resp.ok) {
      const respJson = await resp.json();
      throw new Error(respJson.error);
    }

    return resp.ok;
  } catch (error) {
    throw (error as Error).message;
    //Error de Backend en base a conexion
  }
};

export const getSelectsRolesService = async (): Promise<Roles[]> => {
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
    //Error de Backend en base a conexion
  }
};
