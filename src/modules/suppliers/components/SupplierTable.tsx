"use client"
import { memo } from "react";
import { SearchIcon, MapPinIcon, PhoneIcon, EyeIcon, PencilIcon, TrashIcon, BuildingIcon, PlusIcon } from "lucide-react";
import { Input } from "@/shared/components/UI/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/UI/table";
import { Badge } from "@/shared/components/UI/badge";
import { Button } from "@/shared/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/UI/card";
import { useSupplierContext } from "../context/SuppliersContext";

export const SupplierTable = memo(function SupplierTable() {
  const {
    filteredSuppliers, 
    searchTerm,
    isLoading,
    handleSearchChange,
    handleViewDetails,
    handleOpenEditDialog,
    handleDeleteSupplier,
    setDialogOpen
  } = useSupplierContext();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Directorio de Proveedores</CardTitle>
        <CardDescription>Gestiona los proveedores de tu negocio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar proveedores..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-9 w-full"
          />
        </div>
        
        {isLoading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              <p className="mt-2 text-sm text-muted-foreground">Cargando proveedores...</p>
            </div>
          </div>
        ) : filteredSuppliers.length === 0 ? (
          <div className="text-center py-10">
            <BuildingIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-30" />
            <h3 className="mt-2 text-sm font-semibold text-foreground">No hay proveedores</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              No se encontraron proveedores que coincidan con tu búsqueda.
            </p>
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => setDialogOpen(true)}
                className="gap-2"
              >
                <PlusIcon className="h-4 w-4" />
                Agregar proveedor
              </Button>
            </div>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Productos</TableHead>
                  <TableHead className="w-[100px]">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSuppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="font-medium">{supplier.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                        {supplier.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                        {supplier.contact}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {supplier.products.length} productos
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleViewDetails(supplier)}
                        >
                          <EyeIcon className="h-4 w-4 text-primary" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenEditDialog(supplier)}
                        >
                          <PencilIcon className="h-4 w-4 text-blue-500" />
                        </Button>
                        <Button 
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteSupplier(supplier.id)}
                        >
                          <TrashIcon className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
});