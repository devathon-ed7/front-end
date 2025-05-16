import { useMutation } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { RequestCategory } from "../interfaces/categories.interface";
import { toast } from "sonner";
import { getErrorMessage } from "@/core/utils/handle-error";

export const useCreateCategory = () => {
  const createCategoryMutation = useMutation({
    mutationFn: async (category: RequestCategory) => {
      const result = await categoriesService.createCategory(category);
      return result;
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast(message);
    },
  });

  const createCategory = (category: RequestCategory) => {
    createCategoryMutation.mutate(category);
  };

  return {
    createCategory,
    isPending: createCategoryMutation.isPending,
    isSuccess: createCategoryMutation.isSuccess,
    error: createCategoryMutation.error,
  };
};
