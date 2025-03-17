"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/UI/tabs";
import { UsersIcon, BuildingIcon } from "lucide-react";
import { SuppliersProvider } from "../context/SuppliersContext"; 

import { SupplierHeader } from "../components/SupplierHeader";
import { SupplierTable } from "../components/SupplierTable";
import { SupplierCards } from "../components/SupplierCards";
import { CreateSupplierDialog } from "../components/dialogs/CreateSupplierDialog";
import { DetailSupplierDialog } from "../components/dialogs/DetailSupplierDialog";
import { EditSupplierDialog } from "../components/dialogs/EditSupplierDialog";

const TableSkeleton = () => (
  <div className="h-[400px] animate-pulse bg-muted rounded-md"></div>
);

const CardsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="h-[280px] animate-pulse bg-muted rounded-md"></div>
    ))}
  </div>
);

export const SuppliersPage = () => {
  return (
    <SuppliersProvider>
      <div className="space-y-6">
        <SupplierHeader />

        <Tabs defaultValue="table" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="table">
              <UsersIcon className="h-4 w-4 mr-2" />
              Lista
            </TabsTrigger>
            <TabsTrigger value="cards">
              <BuildingIcon className="h-4 w-4 mr-2" />
              Tarjetas
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="table">
            <Suspense fallback={<TableSkeleton />}>
              <SupplierTable />
            </Suspense>
          </TabsContent>

          <TabsContent value="cards">
            <Suspense fallback={<CardsSkeleton />}>
              <SupplierCards />
            </Suspense>
          </TabsContent>
        </Tabs>
        
        <CreateSupplierDialog />
        <DetailSupplierDialog />
        <EditSupplierDialog />
      </div>
    </SuppliersProvider>
  );
};