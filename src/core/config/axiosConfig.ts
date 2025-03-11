import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API, baseUrl } from "../constants/API";
import { getTokenFromSessionStorage } from "../utils";

export type QueryParams = Record<string, string | number | boolean | null | undefined>;
export type RequestData = Record<string, unknown> | FormData;

const axiosInstance = axios.create({
    baseURL: API + baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getTokenFromSessionStorage();
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

/**
 * Función base para realizar peticiones a la API
 * @template T - Tipo de datos esperado en la respuesta
 * @param config - Configuración de la petición Axios
 * @returns Promise con los datos de la respuesta
 */
export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
        const token = getTokenFromSessionStorage();
        if (!token) {
            throw new Error("No se encontró el token. El usuario puede no estar autenticado.");
        }

        const response: AxiosResponse<T> = await axiosInstance(config);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw error.message;
        }
        throw String(error);
    }
};

/**
 * Realiza una petición GET
 * @template T - Tipo de datos esperado en la respuesta
 * @param url - URL del endpoint
 * @param params - Parámetros de consulta (opcional)
 * @returns Promise con los datos de la respuesta
 */
export const apiGet = <T>(url: string, params?: QueryParams): Promise<T> => {
    return apiRequest<T>({ method: 'GET', url, params });
};

/**
 * Realiza una petición POST con datos JSON
 * @template T - Tipo de datos esperado en la respuesta
 * @template D - Tipo de datos a enviar
 * @param url - URL del endpoint
 * @param data - Datos a enviar
 * @returns Promise con los datos de la respuesta
 */
export const apiPost = <T, D extends Record<string, unknown> = Record<string, unknown>>(url: string, data: D): Promise<T> => {
    return apiRequest<T>({ method: 'POST', url, data });
};

/**
 * Realiza una petición PUT con datos JSON
 * @template T - Tipo de datos esperado en la respuesta
 * @template D - Tipo de datos a enviar
 * @param url - URL del endpoint
 * @param data - Datos a enviar
 * @returns Promise con los datos de la respuesta
 */
export const apiPut = <T, D extends Record<string, unknown> = Record<string, unknown>>(url: string, data: D): Promise<T> => {
    return apiRequest<T>({ method: 'PUT', url, data });
};

/**
 * Realiza una petición DELETE
 * @template T - Tipo de datos esperado en la respuesta
 * @param url - URL del endpoint
 * @returns Promise con los datos de la respuesta
 */
export const apiDelete = <T>(url: string): Promise<T> => {
    return apiRequest<T>({ method: 'DELETE', url });
};

/**
 * Realiza una petición POST con FormData
 * @template T - Tipo de datos esperado en la respuesta
 * @param url - URL del endpoint
 * @param formData - Datos del formulario a enviar
 * @returns Promise con los datos de la respuesta
 */
export const apiPostFormData = <T>(url: string, formData: FormData): Promise<T> => {
    return apiRequest<T>({
        method: 'POST',
        url,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

/**
 * Realiza una petición PUT con FormData
 * @template T - Tipo de datos esperado en la respuesta
 * @param url - URL del endpoint
 * @param formData - Datos del formulario a enviar
 * @returns Promise con los datos de la respuesta
 */
export const apiPutFormData = <T>(url: string, formData: FormData): Promise<T> => {
    return apiRequest<T>({
        method: 'PUT',
        url,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export default {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
    apiPostFormData,
    apiPutFormData,
    apiRequest
};