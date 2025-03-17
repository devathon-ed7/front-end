"use client";

import { memo, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useTransactions } from "../hooks/useTransactions";

export const TransactionStats = memo(function TransactionStats() {
  const { transactions } = useTransactions();
  
  const { inboundTotal, outboundTotal } = useMemo(() => {
    const inbound = transactions
      .filter(t => t.transaction_type === "in")
      .reduce((sum, t) => sum + t.quantity, 0);
    
    const outbound = transactions
      .filter(t => t.transaction_type === "out")
      .reduce((sum, t) => sum + t.quantity, 0);
    
    return { inboundTotal: inbound, outboundTotal: outbound };
  }, [transactions]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen de Transacciones</CardTitle>
        <CardDescription>
          Estadísticas de los últimos 30 días
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Entradas totales</p>
            <div className="flex items-center justify-center gap-2">
              <ArrowUp className="text-green-500 h-5 w-5" />
              <span className="text-2xl font-bold">{inboundTotal}</span>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Salidas totales</p>
            <div className="flex items-center justify-center gap-2">
              <ArrowDown className="text-destructive h-5 w-5" />
              <span className="text-2xl font-bold">{outboundTotal}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});