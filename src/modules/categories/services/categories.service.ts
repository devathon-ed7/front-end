import { apiGet } from "@/core/config/axiosConfig";
import { ResponseCategories } from "../interfaces/categories.interface";


const getCategories = async () => {
  try {
    await apiGet<ResponseCategories>("/categories")
  } catch (error) {
    if (error instanceof Error) {
      throw error.message
    }
    throw String(error)
  }
}

export default { getCategories };
