"use client"
import { memo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Label } from "@/shared/components/UI/label";
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/shared/components/UI/table";
import { Badge } from "@/shared/components/UI/badge";
import { MapPinIcon, PhoneIcon, PencilIcon } from "lucide-react";
import { useSupplierContext } from "../../context/SuppliersContext";

export const DetailSupplierDialog = memo(function DetailSupplierDialog() {
  const { 
    currentSupplier, 
    detailDialogOpen, 
    setDetailDialogOpen, 
    handleOpenEditDialog 
  } = useSupplierContext();
  
  if (!currentSupplier) return null;
  
  return (
    <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Detalles del proveedor</DialogTitle>
          <DialogDescription>
            Información completa sobre {currentSupplier.name}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Información general</h3>
                <div className="mt-2 space-y-3">
                  <div>
                    <Label className="text-xs">ID</Label>
                    <p className="text-sm">{currentSupplier.id}</p>
                  </div>
                  <div>
                    <Label className="text-xs">Nombre</Label>
                    <p className="text-sm">{currentSupplier.name}</p>
                  </div>
                  <div>
                    <Label className="text-xs">Ubicación</Label>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="text-sm">{currentSupplier.location}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs">Contacto</Label>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      <p className="text-sm">{currentSupplier.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Productos suministrados</h3>
              {currentSupplier.products.length === 0 ? (
                <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
                  <p className="text-sm text-muted-foreground">No hay productos asociados</p>
                </div>
              ) : (
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentSupplier.products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.description}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={product.stock > 10 ? "success" : product.stock > 5 ? "warning" : "destructive"}>
                              {product.stock}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDetailDialogOpen(false)}>Cerrar</Button>
          <Button 
            variant="default" 
            onClick={() => handleOpenEditDialog(currentSupplier)}
            className="gap-2"
          >
            <PencilIcon className="h-4 w-4" />
            Editar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});