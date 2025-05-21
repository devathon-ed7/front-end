import { useMutation, useQueryClient } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { getErrorMessage } from "@/core/utils/handle-error";
import { useToast } from "@/shared/hooks/useToast";
import { useTranslation } from "react-i18next";
import { CategoriesData } from "../interfaces/categories.interface";

export const useDeleteCategory = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const result = await categoriesService.deleteCategory(id);
      return result;
    },
    onMutate: async (id) => {
      
      await queryClient.cancelQueries({ queryKey: ["categories"] });
      const previousCategories = queryClient.getQueryData(["categories"]);
      queryClient.setQueryData<CategoriesData>(["categories"], (oldData) => {
        const currentData = oldData || { categories: [] };
        return {
          ...currentData,
          categories: currentData.categories.filter(category => category.id !== id), 
        };
      });
      return { previousCategories };
    },
    onSuccess: (_data, _variables, _context) => {
      toast({
        variant: "success",
        title: "Success",
        description: t("categories.deleteCategorySuccess"),
      });
    },
    onError: (error, _variables, context) => {
      if (context) {
        queryClient.setQueryData(["categories"], context.previousCategories);
      }
      const message = getErrorMessage(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
    },
    onSettled: (_data, _error, _variables, _context) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] })
    },
  });

  const deleteCategory = (id: string) => {
    deleteCategoryMutation.mutateAsync(id);
  };

  return {
    deleteCategory,
    isPending: deleteCategoryMutation.isPending,
    isSuccess: deleteCategoryMutation.isSuccess,
    error: deleteCategoryMutation.error,
  };
};
