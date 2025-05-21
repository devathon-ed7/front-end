import { useMutation, useQueryClient } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { RequestCategory } from "../interfaces/categories.interface";
import { getErrorMessage } from "@/core/utils/handle-error";
import { useToast } from "@/shared/hooks/useToast";
import { useTranslation } from "react-i18next";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { t } = useTranslation();

  const updateCategoryMutation = useMutation({
    mutationFn: async ({ id, category }: { id: string; category: RequestCategory }) => {
      const result = await categoriesService.updateCategory(id, category);
      return result;
    },
    onSuccess: (_data, _variables, _context) => {
      toast({
          variant: "success",
          title: "Success",
          description: t("categories.updateCategorySuccess"),
        });
      },
    onError: (error, _variables, _context) => {
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

  const updateCategory = (id: string, category: RequestCategory) => {
    updateCategoryMutation.mutateAsync({ id, category });
  };

  return {
    updateCategory,
    isPending: updateCategoryMutation.isPending,
    isSuccess: updateCategoryMutation.isSuccess,
    error: updateCategoryMutation.error,
  };
};
