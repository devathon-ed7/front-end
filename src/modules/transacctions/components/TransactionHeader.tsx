"use client";

import { memo } from "react";
import { Button } from "@/shared/components/UI/button";
import { Plus } from "lucide-react";
import { useTransactions } from "../hooks/useTransactions";

export const TransactionHeader = memo(function TransactionHeader() {
  const { setDialogOpen } = useTransactions();
  
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Transacciones</h1>
      <Button className="gap-2" onClick={() => setDialogOpen(true)}>
        <Plus className="h-4 w-4" />
        Nueva Transacción
      </Button>
    </div>
  );
});