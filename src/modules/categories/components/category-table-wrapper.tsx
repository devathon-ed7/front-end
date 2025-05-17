import { useState } from "react";
import ErrorBoundary from "../error-boundary";
import { useCategories } from "../hooks/use-get-categories";
import { CategoryTable } from "./category-table";
import { CategoryTableColumns } from "./category-table-columns";
import Pagination from "./pagination";
import { useDeleteCategory } from "../hooks/use-delete-category";
import { toast } from "sonner";
import { useConfirm } from "@/shared/hooks/useConfirm";

export const CategoryTableWrapper = () => {
  const [page, setPage] = useState(1);
  const { categories, isLoading, isError, error, currentPage, totalPages } =
    useCategories(page);
  const { deleteCategory } = useDeleteCategory();

  const columns = CategoryTableColumns();

  const [confirm, ConfirmDialog] = useConfirm(
    { title: "Eliminar categoría", 
      message: "¿Estás seguro de eliminar esta categoría?" 
    }
  ); 

  const onDelete =async (id: string) => {
    const ok = await confirm();
    if (!ok) return;
    deleteCategory(id);
    toast("Categoría eliminada");
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
            <CategoryTable columns={columns} data={categories} onDelete={onDelete}/>
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
