import { useState } from "react";
import ErrorBoundary from "../error-boundary";
import { useCategories } from "../hooks/use-get-categories";
import { CategoryTable } from "./category-table";
import { CategoryTableColumns } from "./category-table-columns";
import Pagination from "./pagination";
import { useDeleteCategory } from "../hooks/use-delete-category";
import { useConfirm } from "@/shared/hooks/use-confirm";
import { useTranslation } from "react-i18next";

export const CategoryTableWrapper = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { categories, isLoading, isError, error, currentPage, totalPages } =
    useCategories(page);
  const { deleteCategory } = useDeleteCategory();

  const columns = CategoryTableColumns();

  const [confirm, ConfirmDialog] = useConfirm({
    title: t("categories.deleteCategory"),
    message: t("categories.deleteCategoryDescription"),
  });

  const onDelete = async (id: string) => {
    const ok = await confirm();
    if (!ok) return;
    await deleteCategory(id);
  };

  if (isLoading) {
    return <div className="h-[400px] animate-pulse bg-muted rounded-lg"></div>;
  }

  return (
    <ErrorBoundary>
      {isError && error !== null ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <ConfirmDialog />
          <div className="rounded-md border">
            <CategoryTable
              columns={columns}
              data={categories}
              onDelete={onDelete}
            />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </ErrorBoundary>
  );
};
