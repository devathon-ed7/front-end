"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { Product, Transaction, FilterOptions } from "../interfaces/transacction.interface";
import { useTransactionsState } from "../hooks/useTransactions";

export interface TransactionsContextType {
  // Estado
  transactions: Transaction[];
  products: Product[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  filters: FilterOptions;
  newTransaction: {
    product_id: number;
    quantity: number;
    transaction_type: "in" | "out";
    code: string;
  };
  dialogOpen: boolean;
  
  // Acciones
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  setFilters: (filters: FilterOptions | ((prev: FilterOptions) => FilterOptions)) => void;
  setNewTransaction: (transaction: any) => void;
  setDialogOpen: (open: boolean) => void;
  handleCreateTransaction: () => Promise<void>;
  handleDeleteTransaction: (id: number) => Promise<void>;
  formatDate: (dateString: string) => string;
  
  // Datos derivados
  paginatedTransactions: Transaction[];
  
  // Métodos de fetching
  fetchTransactions: () => Promise<void>;
  fetchProducts: () => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextType | null>(null);

export const useTransactionsContext = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error("useTransactionsContext must be used within a TransactionsProvider");
  }
  return context;
};

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const transactionsState = useTransactionsState();

  const contextValue = useMemo(() => transactionsState, [transactionsState]);

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};