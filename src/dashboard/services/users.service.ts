import { API, baseUrl } from "@/constants/API";

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

export const deleteUserByIdService = async (id: string) => {
  try {
    const resp = await fetch(`${API + baseUrl}/users/${id}`, {
      method: "DELETE",
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
