import { useState } from "react";
import ErrorBoundary from "../error-boundary";
import { useCategories } from "../hooks/use-categories";
import { CategoryTable } from "./category-table";
import { CategoryTableColumns } from "./category-table-columns";
import { Button } from "@/shared/components/UI/button";
import { useTranslation } from "react-i18next";

export const CategoryTableWrapper = () => {
  const [page, setPage] = useState(1);
  const { categories, isLoading, isError, error, currentPage, totalPages } =
    useCategories(page);
  const { t } = useTranslation();
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

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

          <div className="flex items-center justify-center space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              {t("common.previous")}
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 10) {
                  pageNumber = i + 1;
                } else {
                  const middle = Math.min(
                    Math.max(currentPage, 3),
                    totalPages - 2
                  );
                  pageNumber = i - 2 + middle;
                }

                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              {t("common.next")}
            </Button>
          </div>
        </>
      )}
    </ErrorBoundary>
  );
};
