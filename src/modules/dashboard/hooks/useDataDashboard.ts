import type { DashboardStats } from "../interfaces/dashboard.interface";

export const useDataDashboard = () => {

  async function fetchDashboardData(): Promise<DashboardStats> {
    try {

      const mockData: DashboardStats = {
        totalUsers: 24,
        totalProducts: 128,
        totalTransactions: 357,
        totalSuppliers: 16,
        recentTransactions: [
          { id: 1, product_id: 1, code: "TRX001", quantity: 10, transaction_type: "in", created_at: "2023-10-17T14:30:00Z" },
          { id: 2, product_id: 2, code: "TRX002", quantity: 5, transaction_type: "out", created_at: "2023-10-18T09:15:00Z" },
          { id: 3, product_id: 3, code: "TRX003", quantity: 8, transaction_type: "in", created_at: "2023-10-18T11:45:00Z" },
          { id: 4, product_id: 1, code: "TRX004", quantity: 3, transaction_type: "out", created_at: "2023-10-19T16:20:00Z" },
        ],
        stockByCategory: [
          { name: "Electronics", stock: 45 },
          { name: "Furniture", stock: 30 },
          { name: "Clothing", stock: 25 },
          { name: "Books", stock: 20 },
          { name: "Food", stock: 15 },
        ],
        transactionsByMonth: [
          { month: "Jan", inbound: 65, outbound: 45 },
          { month: "Feb", inbound: 59, outbound: 49 },
          { month: "Mar", inbound: 80, outbound: 60 },
          { month: "Apr", inbound: 81, outbound: 71 },
          { month: "May", inbound: 56, outbound: 40 },
          { month: "Jun", inbound: 55, outbound: 40 },
          { month: "Jul", inbound: 40, outbound: 30 },
        ],
        topProducts: [
          { name: "Laptop", stock: 24, transactions: 12 },
          { name: "Smartphone", stock: 18, transactions: 10 },
          { name: "Tablet", stock: 15, transactions: 8 },
          { name: "Monitor", stock: 12, transactions: 6 },
          { name: "Keyboard", stock: 10, transactions: 4 },
        ]
      };

      return mockData;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      throw new Error("Failed to fetch dashboard data");
    }
  }

  const chartConfig = {
    inbound: {
      label: "Entradas",
      theme: {
        light: "#8884d8",
        dark: "#a78bfa",
      }
    },
    outbound: {
      label: "Salidas",
      theme: {
        light: "#82ca9d",
        dark: "#4ade80",
      }
    },
    Electronics: {
      label: "Electrónicos",
      theme: {
        light: "#8884d8",
        dark: "#a78bfa",
      }
    },
    Furniture: {
      label: "Muebles",
      theme: {
        light: "#82ca9d",
        dark: "#4ade80",
      }
    },
    Clothing: {
      label: "Ropa",
      theme: {
        light: "#ffc658",
        dark: "#facc15",
      }
    },
    Books: {
      label: "Libros",
      theme: {
        light: "#ff8042",
        dark: "#fb923c",
      }
    },
    Food: {
      label: "Alimentos",
      theme: {
        light: "#0088FE",
        dark: "#38bdf8",
      }
    }
  };

  const CHART_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };
  return {
    fetchDashboardData, chartConfig, CHART_COLORS, formatDate
  }
}

