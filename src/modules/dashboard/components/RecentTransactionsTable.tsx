'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useOptimistic } from "react";
import { useDataDashboard } from "../hooks/useDataDashboard";
import { Transaction } from "../interfaces/dashboard.interface";

interface RecentTransactionsTableProps {
  transactions: Transaction[];
}

export function RecentTransactionsTable({ transactions }: RecentTransactionsTableProps) {
  const [optimisticTransactions] = useOptimistic(
    transactions,
    (state, newTransaction: Transaction) => [...state, newTransaction]
  );
  /*
  const handleNewTransaction = async (transaction: Transaction) => {
    addOptimisticTransaction(transaction);

    // await apiPost('/api/v1/transactions', transaction);
  }; */
  const { formatDate } = useDataDashboard()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transacciones recientes</CardTitle>
        <CardDescription>
          Últimos movimientos registrados en el sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Código</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Tipo</th>
                <th className="px-4 py-2 text-right">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {optimisticTransactions.map((tx) => (
                <tr key={tx.id} className="border-b">
                  <td className="px-4 py-3">{tx.code}</td>
                  <td className="px-4 py-3">{formatDate(tx.created_at)}</td>
                  <td className="px-4 py-3">
                    <div className={`flex items-center ${tx.transaction_type === 'in' ? 'text-green-600' : 'text-red-600'}`}>
                      {tx.transaction_type === 'in' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                      {tx.transaction_type === 'in' ? 'Entrada' : 'Salida'}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">{tx.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}