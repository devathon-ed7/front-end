import { apiGet, apiPost } from "@/core/config/axiosConfig";
import {
  RequestCategory,
  ResponseCategories,
  ResponseCategory,
} from "../interfaces/categories.interface";

export const categoriesService = {
  getCategories: async (page: number): Promise<ResponseCategories> => {
    try {
      return await apiGet<ResponseCategories>("/categories?page=" + page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  createCategory: async (
    category: RequestCategory
  ): Promise<ResponseCategory> => {
    try {
      return await apiPost<ResponseCategory>("/categories", category);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default categoriesService;
