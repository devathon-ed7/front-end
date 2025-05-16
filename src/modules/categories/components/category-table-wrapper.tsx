import { useState } from "react";
import ErrorBoundary from "../error-boundary";
import { useCategories } from "../hooks/use-categories";
import { CategoryTable } from "./category-table";
import { CategoryTableColumns } from "./category-table-columns";
import Pagination from "./pagination";

export const CategoryTableWrapper = () => {
  const [page, setPage] = useState(1);
  const { categories, isLoading, isError, error, currentPage, totalPages } =
    useCategories(page);

  const columns = CategoryTableColumns();
  if (isLoading) {
    return <div className="h-[400px] animate-pulse bg-muted rounded-lg"></div>;
  }

  return (
    <ErrorBoundary>
      {isError && error !== null ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="rounded-md border">
            <CategoryTable columns={columns} data={categories} />
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
