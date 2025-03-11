import { apiGet, apiPostFormData, apiPutFormData, apiDelete } from '@/core/config/axiosConfig';
import { User } from '../interfaces/user.interface';


const getUsers = async (): Promise<User[]> => {
  try {
    return await apiGet<User[]>('/users');
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw String(error);
  }
};


const userCreate = async (formData: FormData): Promise<User> => {
  try {
    return await apiPostFormData<User>('/users', formData);
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw String(error);
  }
};


const deleteUser = async (id: string): Promise<boolean> => {
  try {
    await apiDelete(`/users/${id}`);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw String(error);
  }
};


const userUpdate = async (id: number, formData: FormData): Promise<User> => {
  try {
    return await apiPutFormData<User>(`/users/${id}`, formData);
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw String(error);
  }
};


const getUserById = async (id: number | string): Promise<User> => {
  try {
    return await apiGet<User>(`/users/${id}`);
  } catch (error) {
    if (error instanceof Error) {
      throw error.message;
    }
    throw String(error);
  }
};


export default {
  getUsers,
  userCreate,
  deleteUser,
  userUpdate,
  getUserById
};