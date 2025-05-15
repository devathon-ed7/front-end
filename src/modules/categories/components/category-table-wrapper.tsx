import ErrorBoundary from "../error-boundary";
import { useCategories } from "../hooks/use-categories";
import { CategoryTable } from "./category-table";

export const CategoryTableWrapper = () => {
  const { categories, isLoading, isError, error } = useCategories();

  if (isLoading) {
    return <div className="h-[400px] animate-pulse bg-muted rounded-lg"></div>;
  }

  return (
    <ErrorBoundary>
      {isError && error !== null ? (
        <div>Error: {error.message}</div>
      ) : (
        <CategoryTable categories={categories} />
      )}
    </ErrorBoundary>
  );
};
