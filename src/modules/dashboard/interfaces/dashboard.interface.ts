
export interface DashboardStats {
  totalUsers: number;
  totalProducts: number;
  totalTransactions: number;
  totalSuppliers: number;
  recentTransactions: Transaction[];
  stockByCategory: CategoryStock[];
  transactionsByMonth: MonthlyTransaction[];
  topProducts: ProductStats[];
}

export interface Transaction {
  id: number;
  product_id: number;
  code: string;
  quantity: number;
  transaction_type: "in" | "out";
  created_at: string;
}

export interface CategoryStock {
  name: string;
  stock: number;
}

export interface MonthlyTransaction {
  month: string;
  inbound: number;
  outbound: number;
}

export interface ProductStats {
  name: string;
  stock: number;
  transactions: number;
}

