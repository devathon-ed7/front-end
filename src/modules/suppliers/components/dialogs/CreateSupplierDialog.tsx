"use client"
import { memo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { Label } from "@/shared/components/UI/label";
import { useSupplierContext } from "../../context/SuppliersContext";

export const CreateSupplierDialog = memo(function CreateSupplierDialog() {
  const { 
    dialogOpen, 
    setDialogOpen, 
    newSupplier, 
    setNewSupplier, 
    handleAddSupplier 
  } = useSupplierContext();
  
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar nuevo proveedor</DialogTitle>
          <DialogDescription>
            Complete los detalles del nuevo proveedor para agregarlo a su directorio.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input 
              id="name"
              value={newSupplier.name}
              onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
              placeholder="Nombre de la empresa o proveedor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Ubicación</Label>
            <Input 
              id="location"
              value={newSupplier.location}
              onChange={(e) => setNewSupplier({...newSupplier, location: e.target.value})}
              placeholder="Ciudad, Estado"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Contacto</Label>
            <Input 
              id="contact"
              value={newSupplier.contact}
              onChange={(e) => setNewSupplier({...newSupplier, contact: e.target.value})}
              placeholder="Teléfono o email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleAddSupplier}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});