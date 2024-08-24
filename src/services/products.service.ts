import { API, baseUrl } from "@/constants/API";
import { getTokenFromSessionStorage } from "@/utils/getToken";

const getProducts = async () => {
  try {
    const token = getTokenFromSessionStorage();

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }

    const resp = await fetch(`${API + baseUrl}/products`, {
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

const getCategories = async () => {
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

const newProduct = async (formData: FormData) => {
  try {
    const token = getTokenFromSessionStorage();

    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/products`, {
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

const deleteProduct = async (id: string) => {
  try {
    const token = getTokenFromSessionStorage();
    if (!token) {
      throw new Error(
        "No se encontró el token. El usuario puede no estar autenticado."
      );
    }
    const resp = await fetch(`${API + baseUrl}/products/${id}`, {
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

const productService = {
  getProducts,
  newProduct,
  deleteProduct,
  getCategories,
};

export default productService;
