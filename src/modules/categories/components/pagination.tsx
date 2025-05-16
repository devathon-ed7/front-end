import { Button } from "@/shared/components/UI/button";
import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const { t } = useTranslation();

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        {t("common.previous")}
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          let pageNumber: number;
          if (totalPages <= 5) {
            pageNumber = i + 1;
          } else {
            const middle = Math.min(Math.max(currentPage, 3), totalPages - 2);
            pageNumber = i - 2 + middle;
          }

          return (
            <Button
              key={pageNumber}
              variant={currentPage === pageNumber ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNumber)}
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
  );
};

export default Pagination;
