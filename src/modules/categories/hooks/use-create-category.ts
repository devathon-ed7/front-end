import { useMutation, useQueryClient } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { CategoriesData, RequestCategory } from "../interfaces/categories.interface";
import { getErrorMessage } from "@/core/utils/handle-error";
import { useToast } from "@/shared/hooks/useToast";
import { useTranslation } from "react-i18next";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t } = useTranslation();

  const createCategoryMutation = useMutation({
    mutationFn: async (category: RequestCategory) => {
      const result = await categoriesService.createCategory(category);
      return result;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["categories"] });
      const previousCategories = queryClient.getQueryData<CategoriesData>(["categories"]);

      return { previousCategories };
    },
    onSuccess: (_data, _variables, _context) => {
      toast({
          variant: "success",
          title: "Success",
          description: t("categories.createCategorySuccess"),
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

  const createCategory = (category: RequestCategory) => {
    createCategoryMutation.mutateAsync(category);
  };

  return {
    createCategory,
    isPending: createCategoryMutation.isPending,
    isSuccess: createCategoryMutation.isSuccess,
    error: createCategoryMutation.error,
  };
};
