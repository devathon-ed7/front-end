import { useQuery } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { toast } from "sonner";
import { getErrorMessage } from "@/core/utils/handle-error";

export const useCategories = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await categoriesService.getCategories();
      } catch (error) {
        const message = getErrorMessage(error);
        toast(message);
        throw error;
      }
    },
  });

  const categories = data?.categories || [];

  return {
    categories: categories,
    currentPage: data?.currentPage || 1,
    totalCategories: data?.totalCategories || 0,
    totalPages: data?.totalPages || 0,
    isLoading,
    isError,
    error,
  };
};
