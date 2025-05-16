import { CategoryCreateModal } from "../components/category-create-modal";
import { CategoryHeader } from "../components/category-header";
import { CategoryTableWrapper } from "../components/category-table-wrapper";
import ErrorBoundary from "../error-boundary";

export const CategoryPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <>
        <CategoryCreateModal />
        <CategoryHeader />
        <CategoryTableWrapper />
      </>
    </ErrorBoundary>
  );
};
