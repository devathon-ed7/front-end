"use client";

import { PlusIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/shared/components/UI/button";
import { useSupplierContext } from "../context/SuppliersContext";

export function SupplierHeader() {
  const { resetSuppliers, setDialogOpen } = useSupplierContext();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight"></h1>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={resetSuppliers}
          className="gap-2"
        >
          <RefreshCwIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Refrescar</span>
        </Button>
        <Button
          className="gap-2"
          onClick={() => setDialogOpen(true)}
        >
          <PlusIcon className="h-4 w-4" />
          Nuevo Proveedor
        </Button>
      </div>
    </div>
  );
}