"use client";

import { memo } from "react";
import { TableCell, TableRow } from "@/shared/components/UI/table";
import { Badge } from "@/shared/components/UI/badge";
import { Button } from "@/shared/components/UI/button";
import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import { useTransactions } from "../hooks/useTransactions";
import { Transaction } from "../interfaces/transacction.interface";

interface TransactionRowProps {
  transaction: Transaction;
}

export const TransactionRow = memo(function TransactionRow({ transaction }: TransactionRowProps) {
  const { formatDate, handleDeleteTransaction } = useTransactions();
  
  return (
    <TableRow>
      <TableCell className="font-medium">{transaction.code}</TableCell>
      <TableCell>{transaction.product?.name}</TableCell>
      <TableCell>
        <Badge variant={transaction.transaction_type === "in" ? "secondary" : "destructive"} className="flex w-fit gap-1 items-center">
          {transaction.transaction_type === "in" ? (
            <>
              <ArrowUp className="h-3 w-3" />
              Entrada
            </>
          ) : (
            <>
              <ArrowDown className="h-3 w-3" />
              Salida
            </>
          )}
        </Badge>
      </TableCell>
      <TableCell className="text-right">{transaction.quantity}</TableCell>
      <TableCell className="hidden md:table-cell">{formatDate(transaction.created_at)}</TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDeleteTransaction(transaction.id)}
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </TableCell>
    </TableRow>
  );
});

export const Pagination = memo(function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = useTransactions();
  
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          // Mostrar máximo 5 páginas
          let pageNumber;
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
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </div>
  );
});