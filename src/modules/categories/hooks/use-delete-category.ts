import { useMutation } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { toast } from "sonner";
import { getErrorMessage } from "@/core/utils/handle-error";

export const useDeleteCategory = () => {
  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const result = await categoriesService.deleteCategory(id);
      return result;
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast(message);
    },
  });

  const deleteCategory = (id: string) => {
    deleteCategoryMutation.mutate(id);
  };

  return {
    deleteCategory,
    isPending: deleteCategoryMutation.isPending,
    isSuccess: deleteCategoryMutation.isSuccess,
    error: deleteCategoryMutation.error,
  };
};
