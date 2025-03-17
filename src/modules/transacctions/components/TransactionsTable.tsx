"use client";

import { memo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/UI/table";
import { useTransactions } from "../hooks/useTransactions";
import { TransactionRow, Pagination } from "./TransactionRow";

export const TransactionsTable = memo(function TransactionsTable() {
  const { loading, paginatedTransactions } = useTransactions();
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Producto</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead className="text-right">Cantidad</TableHead>
            <TableHead className="hidden md:table-cell">Fecha</TableHead>
            <TableHead className="w-[100px]">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                <div className="flex justify-center items-center">
                  <div className="animate-spin h-6 w-6 border-4 border-primary border-t-transparent rounded-full"></div>
                  <span className="ml-2">Cargando transacciones...</span>
                </div>
              </TableCell>
            </TableRow>
          ) : paginatedTransactions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No se encontraron transacciones
              </TableCell>
            </TableRow>
          ) : (
            paginatedTransactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))
          )}
        </TableBody>
      </Table>
      
      <Pagination />
    </div>
  );
});