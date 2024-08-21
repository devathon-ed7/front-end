import { API, baseUrl } from "@/constants/API";
import { Roles } from "@/interfaces";

export const getListUsersService = async () => {
  try {
    const resp = await fetch(`${API + baseUrl}/users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "bearer " + localStorage.getItem("token") || "",
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
    const resp = await fetch(`${API + baseUrl}/users`, {
      method: "POST",
      body: formData,
      headers: {
        authorization: "bearer " + localStorage.getItem("token") || "",
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
    const resp = await fetch(`${API + baseUrl}/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "bearer " + localStorage.getItem("token") || "",
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
    const resp = await fetch(`${API + baseUrl}/roles`, {
      headers: {
        authorization: "bearer " + localStorage.getItem("token") || "",
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
