import categoriesService from "@/services/categories.service";
import { useCategoriesStore } from "@/store/categoties.store";

export const useCategories = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);
  const categories = useCategoriesStore((state) => state.categories);

  const getCategories = async () => {
    try {
      const resp = await categoriesService.getCategories();
      setCategories(resp.categories);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };
  return {
    categories,
    getCategories,
  };
};
