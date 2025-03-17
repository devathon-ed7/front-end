"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Label } from "@/shared/components/UI/label";
import { Input } from "@/shared/components/UI/input";
import { Button } from "@/shared/components/UI/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/UI/select";
import { useTransactions } from "../hooks/useTransactions";

export function TransactionCreateDialog() {
  const { 
    products, 
    dialogOpen, 
    setDialogOpen, 
    newTransaction, 
    setNewTransaction,
    handleCreateTransaction 
  } = useTransactions();
  
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registrar nueva transacción</DialogTitle>
          <DialogDescription>
            Registra una entrada o salida de productos del inventario.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="product">Producto</Label>
            <Select 
              onValueChange={(value) => setNewTransaction({...newTransaction, product_id: Number(value)})}
              value={newTransaction.product_id ? String(newTransaction.product_id) : undefined}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un producto" />
              </SelectTrigger>
              <SelectContent>
                {products.map(product => (
                  <SelectItem key={product.id} value={String(product.id)}>
                    {product.name} (Stock: {product.stock})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Tipo de Transacción</Label>
            <Select 
              onValueChange={(value) => setNewTransaction({
                ...newTransaction, 
                transaction_type: value as "in" | "out"
              })}
              value={newTransaction.transaction_type}
            >
              <SelectTrigger>
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in">Entrada</SelectItem>
                <SelectItem value="out">Salida</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity">Cantidad</Label>
            <Input 
              id="quantity"
              type="number" 
              min="1"
              value={newTransaction.quantity}
              onChange={(e) => setNewTransaction({
                ...newTransaction,
                quantity: parseInt(e.target.value) || 1
              })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleCreateTransaction}>Registrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}