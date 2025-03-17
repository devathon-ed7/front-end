"use client"
import { memo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { Label } from "@/shared/components/UI/label";
import { useSupplierContext } from "../../context/SuppliersContext";

export const EditSupplierDialog = memo(function EditSupplierDialog() {
  const { 
    editSupplier, 
    editDialogOpen, 
    setEditDialogOpen, 
    setEditSupplier, 
    handleEditSupplier 
  } = useSupplierContext();

  return (
    <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar proveedor</DialogTitle>
          <DialogDescription>
            Modifique los detalles del proveedor y guarde los cambios.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-name">Nombre</Label>
            <Input 
              id="edit-name"
              value={editSupplier.name}
              onChange={(e) => setEditSupplier({...editSupplier, name: e.target.value})}
              placeholder="Nombre de la empresa o proveedor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-location">Ubicación</Label>
            <Input 
              id="edit-location"
              value={editSupplier.location}
              onChange={(e) => setEditSupplier({...editSupplier, location: e.target.value})}
              placeholder="Ciudad, Estado"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-contact">Contacto</Label>
            <Input 
              id="edit-contact"
              value={editSupplier.contact}
              onChange={(e) => setEditSupplier({...editSupplier, contact: e.target.value})}
              placeholder="Teléfono o email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setEditDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleEditSupplier}>Actualizar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});