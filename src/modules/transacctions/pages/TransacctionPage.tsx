import { Suspense } from "react";
import { TransactionHeader } from "../components/TransactionHeader";
import { TransactionFilters } from "../components/TransactionFilters";
import { TransactionStats } from "../components/TransactionStats";
import { TransactionTopProducts } from "../components/TransactionTopProducts";
import { TransactionCreateDialog } from "../components/TransactionCreateDialog";
import { TransactionsProvider } from "../context/TransactionsContext";
import { TransactionsTable } from "../components/TransactionsTable";

const TableSkeleton = () => (
  <div className="h-[400px] animate-pulse bg-muted rounded-lg"></div>
);

const CardSkeleton = () => (
  <div className="h-[200px] animate-pulse bg-muted rounded-lg"></div>
);

export const TransacctionPage = () => {
  return (
    <TransactionsProvider>
      <div className="space-y-6">
        <TransactionHeader />

        <Suspense fallback={<TableSkeleton />}>
          <TransactionFilters />
          <TransactionsTable />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={<CardSkeleton />}>
            <TransactionStats />
          </Suspense>

          <Suspense fallback={<CardSkeleton />}>
            <TransactionTopProducts />
          </Suspense>
        </div>

        <TransactionCreateDialog />
      </div>
    </TransactionsProvider>
  );
};