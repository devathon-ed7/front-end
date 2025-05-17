import { useMutation, useQueryClient } from "@tanstack/react-query";
import categoriesService from "../services/categories-service";
import { getErrorMessage } from "@/core/utils/handle-error";
import { useToast } from "@/shared/hooks/useToast";
import { useTranslation } from "react-i18next";

export const useDeleteCategory = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const result = await categoriesService.deleteCategory(id);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast({
        variant: "success",
        title: "Success",
        description: t("categories.deleteCategorySuccess"),
      });
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: message,
      });
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
