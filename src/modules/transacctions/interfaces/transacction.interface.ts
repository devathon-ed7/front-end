export interface Transaction {
  id: number;
  product_id: number;
  code: string;
  quantity: number;
  transaction_type: "in" | "out";
  created_at: string;
  product?: {
    name: string;
    price: number;
  };
}

export interface Product {
  id: number;
  name: string;
  stock: number;
}

export interface FilterOptions {
  dateRange: string;
  transactionType: string;
  searchTerm: string;
}