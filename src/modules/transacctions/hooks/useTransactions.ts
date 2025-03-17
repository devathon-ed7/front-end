import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/shared/hooks/useToast";
import { Transaction, Product, FilterOptions } from "../interfaces/transacction.interface";
import { useTransactionsContext } from "../context/TransactionsContext";

export const useTransactions = () => {
  return useTransactionsContext();
}

export const useTransactionsState = () => {
  const { toast } = useToast();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [newTransaction, setNewTransaction] = useState({
    product_id: 0,
    quantity: 1,
    transaction_type: "in" as "in" | "out",
    code: ""
  });

  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    transactionType: "all",
    searchTerm: ""
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const mockTransactions = useCallback((): Transaction[] => [
    {
      id: 1,
      product_id: 101,
      code: "TRX-001",
      quantity: 10,
      transaction_type: "in",
      created_at: "2023-10-17T14:30:00Z",
      product: { name: "Laptop HP 15", price: 599.99 }
    },
    {
      id: 2,
      product_id: 102,
      code: "TRX-002",
      quantity: 5,
      transaction_type: "out",
      created_at: "2023-10-18T09:15:00Z",
      product: { name: "Monitor Dell 27\"", price: 249.99 }
    },
    {
      id: 3,
      product_id: 103,
      code: "TRX-003",
      quantity: 20,
      transaction_type: "in",
      created_at: "2023-10-19T11:45:00Z",
      product: { name: "Teclado Mecánico RGB", price: 79.99 }
    },
    {
      id: 4,
      product_id: 101,
      code: "TRX-004",
      quantity: 3,
      transaction_type: "out",
      created_at: "2023-10-20T16:20:00Z",
      product: { name: "Laptop HP 15", price: 599.99 }
    },
    {
      id: 5,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 6,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 7,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 8,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 9,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 10,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 11,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 12,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 13,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 14,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
    {
      id: 15,
      product_id: 104,
      code: "TRX-005",
      quantity: 15,
      transaction_type: "in",
      created_at: "2023-10-21T10:30:00Z",
      product: { name: "Mouse Inalámbrico", price: 24.99 }
    },
  ], []);

  const mockProducts = useCallback((): Product[] => [
    { id: 101, name: "Laptop HP 15", stock: 25 },
    { id: 102, name: "Monitor Dell 27\"", stock: 15 },
    { id: 103, name: "Teclado Mecánico RGB", stock: 30 },
    { id: 104, name: "Mouse Inalámbrico", stock: 45 },
    { id: 105, name: "Auriculares Bluetooth", stock: 20 },
  ], []);

  const applyFilters = useCallback((transactions: Transaction[], filters: FilterOptions) => {
    let filtered = [...transactions];

    if (filters.searchTerm) {
      filtered = filtered.filter(
        tx => tx.code.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          (tx.product?.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      );
    }

    if (filters.transactionType !== 'all') {
      filtered = filtered.filter(
        tx => tx.transaction_type === filters.transactionType
      );
    }

    if (filters.dateRange !== 'all') {
      const now = new Date();
      let startDate = new Date();

      switch (filters.dateRange) {
        case 'today':
          startDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          startDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          startDate.setMonth(now.getMonth() - 1);
          break;
      }

      filtered = filtered.filter(
        tx => new Date(tx.created_at) >= startDate
      );
    }

    return filtered;
  }, []);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    try {
      const transactionsData = mockTransactions();

      const filteredTransactions = applyFilters(transactionsData, filters);

      setTransactions(filteredTransactions);
      setTotalPages(Math.ceil(filteredTransactions.length / 10));
    } catch (error) {
      console.error("Error al cargar transacciones:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las transacciones",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [applyFilters, filters, mockTransactions, toast]);

  const fetchProducts = useCallback(async () => {
    try {
      setProducts(mockProducts());
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  }, [mockProducts]);

  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      fetchProducts();
      fetchTransactions();
    }
  }, [fetchProducts, fetchTransactions]);

  const filtersRef = useRef(filters);
  useEffect(() => {
    if (
      filtersRef.current.dateRange !== filters.dateRange ||
      filtersRef.current.searchTerm !== filters.searchTerm ||
      filtersRef.current.transactionType !== filters.transactionType
    ) {
      filtersRef.current = filters;
      const timer = setTimeout(() => {
        fetchTransactions();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [filters, fetchTransactions]);

  const handleCreateTransaction = useCallback(async () => {
    try {
      if (!newTransaction.product_id) {
        toast({
          title: "Error",
          description: "Por favor selecciona un producto",
          variant: "destructive"
        });
        return;
      }

      if (newTransaction.quantity <= 0) {
        toast({
          title: "Error",
          description: "La cantidad debe ser mayor a cero",
          variant: "destructive"
        });
        return;
      }

      // Simulamos la creación
      const selectedProduct = products.find(p => p.id === newTransaction.product_id);

      const createdTransaction: Transaction = {
        id: Math.floor(Math.random() * 1000),
        product_id: newTransaction.product_id,
        code: `TRX-${Math.floor(Math.random() * 1000)}`,
        quantity: newTransaction.quantity,
        transaction_type: newTransaction.transaction_type,
        created_at: new Date().toISOString(),
        product: {
          name: selectedProduct?.name || "Producto",
          price: 0
        }
      };

      setTransactions(prev => [createdTransaction, ...prev]);

      toast({
        title: "Éxito",
        description: "Transacción registrada correctamente",
      });

      setNewTransaction({
        product_id: 0,
        quantity: 1,
        transaction_type: "in",
        code: ""
      });

      setDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo crear la transacción",
        variant: "destructive"
      });
    }
  }, [newTransaction, products, toast]);

  // Función para eliminar una transacción
  const handleDeleteTransaction = useCallback(async (id: number) => {
    try {
      // Actualizamos el estado local
      setTransactions(prev => prev.filter(tx => tx.id !== id));

      toast({
        title: "Éxito",
        description: "Transacción eliminada correctamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar la transacción",
        variant: "destructive"
      });
    }
  }, [toast]);

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }, []);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return {
    // Estado
    transactions,
    products,
    loading,
    currentPage,
    totalPages,
    filters,
    newTransaction,
    dialogOpen,

    // Setters
    setCurrentPage,
    setFilters,
    setNewTransaction,
    setDialogOpen,

    // Acciones
    handleCreateTransaction,
    handleDeleteTransaction,

    // Utilidades
    formatDate,

    // Datos computados
    paginatedTransactions,

    // Métodos para obtener datos
    fetchTransactions,
    fetchProducts,
  };
};