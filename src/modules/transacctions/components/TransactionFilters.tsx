"use client";

import { useCallback, memo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { Input } from "@/shared/components/UI/input";
import { Button } from "@/shared/components/UI/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/UI/select";
import { Search, FileDown, SlidersHorizontal } from "lucide-react";
import { useTransactions } from "../hooks/useTransactions";

export const TransactionFilters = memo(function TransactionFilters() {
  const { filters, setFilters } = useTransactions();
  
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters(prev => ({...prev, searchTerm: value}));
  }, [setFilters]);
  
  const handleTypeChange = useCallback((value: string) => {
    setFilters(prev => ({...prev, transactionType: value}));
  }, [setFilters]);
  
  const handleDateRangeChange = useCallback((value: string) => {
    setFilters(prev => ({...prev, dateRange: value}));
  }, [setFilters]);
  
  const handleClearFilters = useCallback(() => {
    setFilters({
      dateRange: "all",
      transactionType: "all",
      searchTerm: ""
    });
  }, [setFilters]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Transacciones</CardTitle>
        <CardDescription>
          Consulta y gestiona todas las entradas y salidas de inventario
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por código o producto..."
                className="pl-8"
                value={filters.searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            
            <Select
              value={filters.transactionType}
              onValueChange={handleTypeChange}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="in">Entradas</SelectItem>
                <SelectItem value="out">Salidas</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filters.dateRange}
              onValueChange={handleDateRangeChange}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Fecha" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las fechas</SelectItem>
                <SelectItem value="today">Hoy</SelectItem>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <FileDown className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </Button>
            <Button 
              variant="outline" 
              className="gap-2" 
              onClick={handleClearFilters}
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Limpiar filtros</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});