import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/UI/dialog";
import { useCreateCategory } from "../hooks/use-create-category";
import { useCategoriesStore } from "../store/categoties.store";
import { useTranslation } from "react-i18next";
import { set, useForm } from "react-hook-form";
import { CategorySchema } from "../schemas/category-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/components/UI/form";
import { Input } from "@/shared/components/UI/input";
import { Button } from "@/shared/components/UI/button";
import { useUpdateCategory } from "../hooks/use-update-category";



export const CategoryCreateModal = () => {
  const { t } = useTranslation();
  const { createCategory, isPending: isCreating, isSuccess: isCreatingSuccess } = useCreateCategory();
  const { updateCategory, isPending: isUpdating, isSuccess: isUpdatingSuccess } = useUpdateCategory();
  const open = useCategoriesStore((state) => state.modalState);
  //modal store
  const setOpen = useCategoriesStore((state) => state.setModalState);
  const category = useCategoriesStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoriesStore((state) => state.setSelectedCategory);

  const form = useForm<CategorySchema>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  const onSubmit =  (data: CategorySchema) => {
    if (category) {
      updateCategory(category.id, data);
      if (isCreatingSuccess) {
        onClose();
      }
    }else {
      createCategory(data); 
    }
    if (isCreatingSuccess || isUpdatingSuccess) {
      onClose();
    }
    
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
           <DialogTitle>{category ? t("categories.editCategory") : t("categories.addCategory")}</DialogTitle>
          <DialogDescription>
            {category ? t("categories.editCategoryDescription") : t("categories.addCategoryDescription")}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("categories.name")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("categories.namePlaceholder")}
                        type="text"
                        required
                        disabled={isCreating || isUpdating}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("categories.description")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("categories.descriptionPlaceholder")}
                        type="text"
                        required
                        disabled={isCreating || isUpdating}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button disabled={isCreating || isUpdating} type="submit" className="w-full">
                {isCreating || isUpdating ? t("categories.saving") : (category ? t("categories.update") : t("categories.create"))}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
