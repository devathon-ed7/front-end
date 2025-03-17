import { Suspense, use } from "react";
import { StatsCards } from "../components/StatsCards";
import { TransactionChart } from "../components/TransactionChart";
import { CategoryPieChart } from "../components/CategoryPieChart";
import { RecentTransactionsTable } from "../components/RecentTransactionsTable";
import { useDataDashboard } from "../hooks/useDataDashboard";
import { TopProductsChart } from "../components/TopProductsChart";


const LoadingCard = () => (
  <div className="h-32 animate-pulse bg-muted rounded-lg"></div>
);

const LoadingChart = () => (
  <div className="h-[300px] animate-pulse bg-muted rounded-lg"></div>
);

const LoadingTable = () => (
  <div className="h-64 animate-pulse bg-muted rounded-lg"></div>
);

export const DashboardPage = () => {
  const {fetchDashboardData} = useDataDashboard()
  const dashboardDataPromise = fetchDashboardData();
  const dashboardData = use(dashboardDataPromise);

  return (
    <div className="space-y-6">
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <LoadingCard key={i} />)}
        </div>
      }>
        <StatsCards
          totalUsers={dashboardData.totalUsers}
          totalProducts={dashboardData.totalProducts}
          totalTransactions={dashboardData.totalTransactions}
          totalSuppliers={dashboardData.totalSuppliers}
        />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Suspense fallback={<LoadingChart />}>
          <TransactionChart transactions={dashboardData.transactionsByMonth} />
        </Suspense>

        <Suspense fallback={<LoadingChart />}>
          <CategoryPieChart categories={dashboardData.stockByCategory} />
        </Suspense>
      </div>

      <Suspense fallback={<LoadingTable />}>
        <RecentTransactionsTable transactions={dashboardData.recentTransactions} />
      </Suspense>

      <Suspense fallback={<LoadingChart />}>
        <TopProductsChart products={dashboardData.topProducts} />
      </Suspense>
    </div>
  );
};