"use client";

import { createContext, useContext, ReactNode } from "react";
import { useSuppliers } from "../hooks/useSuppliers";
import { EditSupplier, NewSupplier, Supplier } from "../interfaces/supplier.interface";

interface SuppliersContextType {
  suppliers: Supplier[];
  filteredSuppliers: Supplier[];
  searchTerm: string;
  isLoading: boolean;
  newSupplier: NewSupplier;
  editSupplier: EditSupplier;
  currentSupplier: Supplier | null;
  dialogOpen: boolean;
  editDialogOpen: boolean;
  detailDialogOpen: boolean;
  setSearchTerm: (term: string) => void;
  setNewSupplier: (supplier: NewSupplier) => void;
  setEditSupplier: (supplier: EditSupplier) => void;
  setDialogOpen: (open: boolean) => void;
  setEditDialogOpen: (open: boolean) => void;
  setDetailDialogOpen: (open: boolean) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddSupplier: () => void;
  handleEditSupplier: () => void;
  handleOpenEditDialog: (supplier: Supplier) => void;
  handleDeleteSupplier: (id: number) => void;
  handleViewDetails: (supplier: Supplier) => void;
  resetSuppliers: () => void;
}

const SuppliersContext = createContext<SuppliersContextType | undefined>(undefined);

export function SuppliersProvider({ children }: { children: ReactNode }) {
  const suppliersData = useSuppliers();
  
  return (
    <SuppliersContext.Provider value={suppliersData}>
      {children}
    </SuppliersContext.Provider>
  );
}

export function useSupplierContext() {
  const context = useContext(SuppliersContext);
  
  if (context === undefined) {
    throw new Error("useSupplierContext must be used within a SuppliersProvider");
  }
  
  return context;
}