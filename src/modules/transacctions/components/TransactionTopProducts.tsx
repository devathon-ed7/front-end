"use client";

import { memo, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { Badge } from "@/shared/components/UI/badge";
import { useTransactions } from "../hooks/useTransactions";

export const TransactionTopProducts = memo(function TransactionTopProducts() {
  const { transactions, products } = useTransactions();
  
  const topProducts = useMemo(() => {
    const productCounts = new Map();
    const productMovements = new Map();
    
    transactions.forEach(t => {
      productCounts.set(t.product_id, (productCounts.get(t.product_id) || 0) + 1);
      productMovements.set(t.product_id, (productMovements.get(t.product_id) || 0) + t.quantity);
    });
    
    return Array.from(productCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3) 
      .map(([productId, count]) => {
        const product = products.find(p => p.id === productId) || { id: productId, name: "Desconocido", stock: 0 };
        const totalMovements = productMovements.get(productId) || 0;
        
        return {
          productId,
          product,
          transactions: count,
          totalMovements
        };
      });
  }, [transactions, products]);
  
  if (topProducts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Productos con mayor movimiento</CardTitle>
          <CardDescription>
            Top productos con más transacciones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-24 text-muted-foreground">
            No hay datos de productos disponibles
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Productos con mayor movimiento</CardTitle>
        <CardDescription>
          Top productos con más transacciones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map(({ productId, product, transactions: txCount, totalMovements }) => (
            <div key={productId} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {txCount} transacciones
                </p>
              </div>
              <Badge variant="outline" className="text-sm">
                {totalMovements} unidades
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});