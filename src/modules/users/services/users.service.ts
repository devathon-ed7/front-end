import { API, baseUrl } from "@/core/constants/API";
import { getTokenFromSessionStorage } from "@/core/utils";


const getUsers = async () => {
  try {
    const token = getTokenFromSessionStorage();

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

  }
};

const userCreate = async (formData: FormData) => {
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

  }
};

const deleteUser = async (id: string) => {
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

  }
};

const userUpdate = async (id: number, formData: FormData) => {
  try {
    const token = getTokenFromSessionStorage();

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/users/${id}`, {
      method: "PUT",
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

  }
};

export default {
  getUsers,
  userCreate,
  deleteUser,
  userUpdate,
};
