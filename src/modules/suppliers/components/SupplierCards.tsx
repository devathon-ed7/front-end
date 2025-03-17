"use client"
import { memo } from "react";
import { MapPinIcon, PhoneIcon, PackageIcon, PlusIcon, EyeIcon, TrashIcon } from "lucide-react";
import { Button } from "@/shared/components/UI/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/shared/components/UI/card";
import { useSupplierContext } from "../context/SuppliersContext";

export const SupplierCards = memo(function SupplierCards() {
  const { 
    filteredSuppliers, 
    isLoading, 
    handleViewDetails, 
    handleDeleteSupplier, 
    setDialogOpen 
  } = useSupplierContext();

  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          <p className="mt-2 text-sm text-muted-foreground">Cargando proveedores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSuppliers.map((supplier) => (
        <Card key={supplier.id} className="overflow-hidden">
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex justify-between items-start">
              <div className="flex flex-col">
                <span>{supplier.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  ID: {supplier.id}
                </span>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" onClick={() => handleViewDetails(supplier)}>
                  <EyeIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteSupplier(supplier.id)}>
                  <TrashIcon className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <span>{supplier.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                <span>{supplier.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageIcon className="h-4 w-4 text-muted-foreground" />
                <span>{supplier.products.length} productos suministrados</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t bg-muted/30 pt-4">
            <span className="text-xs text-muted-foreground">
              {supplier.products.length === 0 
                ? "Sin productos" 
                : supplier.products.length === 1 
                  ? "1 producto" 
                  : `${supplier.products.length} productos`}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleViewDetails(supplier)}
              className="gap-2"
            >
              <EyeIcon className="h-3.5 w-3.5" />
              Ver detalles
            </Button>
          </CardFooter>
        </Card>
      ))}

      <Card 
        className="border-dashed border-2 flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer" 
        onClick={() => setDialogOpen(true)}
      >
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <PlusIcon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-foreground">Agregar proveedor</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Añade un nuevo proveedor a tu lista
          </p>
        </CardContent>
      </Card>
    </div>
  );
});