import { User } from "../../interfaces/index.interface";

export const loginService = async (user: User) => {
  try {
    throw new Error("No se pudo loguear, porque la api no esta establecida XD");

    const resp = await fetch(`http://localhost/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await resp.json();
  } catch (error) {
    console.log({ error });
    throw (error as Error).message;
    //Error de Backend en base a conexion
  }
};
