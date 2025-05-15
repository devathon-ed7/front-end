import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { Category } from "../interfaces/categories.interface";

export const CategoryTableColumns = (): ColumnDef<Category>[] => {
  const { t } = useTranslation();

  return [
    {
      accessorKey: "name",
      header: t("categories.category"),
    },
    {
      accessorKey: "description",
      header: t("categories.description"),
    },
  ];
};
