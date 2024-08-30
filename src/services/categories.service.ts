import { API, baseUrl } from "@/constants/API";
import { ResponseCategories } from "@/interfaces";
import { getTokenFromSessionStorage } from "@/utils";

const getCategories = async (): Promise<ResponseCategories> => {
  try {
    const token = getTokenFromSessionStorage();

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }

    const resp = await fetch(`${API + baseUrl}/categories`, {
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

export default { getCategories };
