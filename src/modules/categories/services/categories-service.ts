import { apiGet, apiPost } from "@/core/config/axiosConfig";
import {
  RequestCategory,
  ResponseCategories,
} from "../interfaces/categories.interface";

export const categoriesService = {
  getCategories: async (page: number): Promise<ResponseCategories> => {
    try {
      return await apiGet<ResponseCategories>("/categories?page=" + page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  createCategory: async (category: RequestCategory): Promise<String> => {
    try {
      return await apiPost<String>("/categories", category);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default categoriesService;
