import { apiGet } from "@/core/config/axiosConfig";
import { ResponseCategories } from "../interfaces/categories.interface";

export const categoriesService = {
  getCategories: async (page: number): Promise<ResponseCategories> => {
    try {
      return await apiGet<ResponseCategories>("/categories?page=" + page);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default categoriesService;
