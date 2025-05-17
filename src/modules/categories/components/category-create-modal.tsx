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
import { useForm } from "react-hook-form";
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

export const CategoryCreateModal = () => {
  const { t } = useTranslation();
  const { createCategory, isPending, isSuccess } = useCreateCategory();
  const open = useCategoriesStore((state) => state.modalState);
  const setOpen = useCategoriesStore((state) => state.setModalState);
  const form = useForm<CategorySchema>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = async (category: CategorySchema) => {
    await createCategory(category);
    if (isSuccess) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("categories.addCategory")}</DialogTitle>
          <DialogDescription>
            {t("categories.addCategoryDescription")}
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
                        disabled={isPending}
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
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button disabled={isPending} type="submit" className="w-full">
                {t("categories.create")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
