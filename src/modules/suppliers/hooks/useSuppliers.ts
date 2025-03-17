import { useState, useCallback, useMemo } from "react";
import { useToast } from "@/shared/hooks/useToast";
import { EditSupplier, NewSupplier, Supplier } from "../interfaces/supplier.interface";

const mockSuppliers = [
  {
    id: 1,
    name: "TechMasters Inc.",
    location: "San Francisco, CA",
    contact: "+1-555-123-4567",
    products: [
      { id: 101, name: "Laptop Dell XPS", description: "Laptop de alta gama", stock: 15 },
      { id: 102, name: "Monitor UltraWide", description: "Monitor curvo 34\"", stock: 8 },
    ]
  },
  {
    id: 2,
    name: "ElectroSupply Co.",
    location: "Austin, TX",
    contact: "+1-555-987-6543",
    products: [
      { id: 201, name: "Teclado mecánico", description: "Teclado con switches Cherry MX", stock: 25 },
      { id: 202, name: "Mouse inalámbrico", description: "Mouse ergonómico", stock: 30 },
      { id: 203, name: "Auriculares Bluetooth", description: "Con cancelación de ruido", stock: 12 },
    ]
  },
  {
    id: 3,
    name: "GlobalParts Ltd.",
    location: "Boston, MA",
    contact: "+1-555-456-7890",
    products: [
      { id: 301, name: "Cámara web 4K", description: "Cámara para videoconferencias", stock: 20 },
    ]
  },
  {
    id: 4,
    name: "NetworkSolutions",
    location: "Chicago, IL",
    contact: "+1-555-789-0123",
    products: [
      { id: 401, name: "Router WiFi 6", description: "Router de alta velocidad", stock: 10 },
      { id: 402, name: "Switch 24 puertos", description: "Switch gestionable", stock: 5 },
    ]
  },
  {
    id: 5,
    name: "ComponentWholesale",
    location: "Denver, CO",
    contact: "+1-555-234-5678",
    products: [
      { id: 501, name: "Tarjeta gráfica RTX", description: "GPU para gaming", stock: 7 },
      { id: 502, name: "Procesador i9", description: "CPU Intel de última gen", stock: 9 },
      { id: 503, name: "RAM DDR5", description: "Memoria de alta velocidad", stock: 22 },
    ]
  }
];

export function useSuppliers() {
  const { toast } = useToast();
  const [suppliers, setSuppliers] = useState<Supplier[]>(mockSuppliers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Dialog states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  
  // Current items
  const [currentSupplier, setCurrentSupplier] = useState<Supplier | null>(null);
  const [editSupplier, setEditSupplier] = useState<EditSupplier>({
    id: 0,
    name: "",
    location: "",
    contact: ""
  });
  const [newSupplier, setNewSupplier] = useState<NewSupplier>({
    name: "",
    location: "",
    contact: ""
  });

  // Initialize loading state
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  // Filtered suppliers based on search term
  const filteredSuppliers = useMemo(() => {
    return suppliers.filter(supplier => 
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [suppliers, searchTerm]);

  // Handler functions
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleAddSupplier = useCallback(() => {
    if (!newSupplier.name || !newSupplier.location || !newSupplier.contact) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos",
        variant: "destructive"
      });
      return;
    }
    
    const supplier = {
      id: suppliers.length + 1,
      ...newSupplier,
      products: []
    };
    
    setSuppliers(prev => [supplier, ...prev]);
    setDialogOpen(false);
    setNewSupplier({ name: "", location: "", contact: "" });
    
    toast({
      title: "Proveedor agregado",
      description: "El proveedor ha sido agregado exitosamente",
      variant: "success"
    });
  }, [newSupplier, suppliers.length, toast]);

  const handleEditSupplier = useCallback(() => {
    if (!editSupplier.name || !editSupplier.location || !editSupplier.contact) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos",
        variant: "destructive"
      });
      return;
    }
    
    setSuppliers(prevSuppliers => 
      prevSuppliers.map(supplier => 
        supplier.id === editSupplier.id 
          ? { 
              ...supplier, 
              name: editSupplier.name,
              location: editSupplier.location,
              contact: editSupplier.contact
            } 
          : supplier
      )
    );
    
    setEditDialogOpen(false);
    
    toast({
      title: "Proveedor actualizado",
      description: "El proveedor ha sido actualizado exitosamente",
      variant: "success"
    });
  }, [editSupplier, toast]);

  const handleOpenEditDialog = useCallback((supplier: Supplier) => {
    setEditSupplier({
      id: supplier.id,
      name: supplier.name,
      location: supplier.location,
      contact: supplier.contact
    });
    setEditDialogOpen(true);
    setDetailDialogOpen(false);
  }, []);

  const handleDeleteSupplier = useCallback((id: number) => {
    setSuppliers(prevSuppliers => prevSuppliers.filter(supplier => supplier.id !== id));
    
    toast({
      title: "Proveedor eliminado",
      description: "El proveedor ha sido eliminado exitosamente",
      variant: "success"
    });
  }, [toast]);

  const handleViewDetails = useCallback((supplier: Supplier) => {
    setCurrentSupplier(supplier);
    setDetailDialogOpen(true);
  }, []);

  const resetSuppliers = useCallback(() => {
    setSuppliers(mockSuppliers);
  }, []);

  return {
    // State
    suppliers,
    filteredSuppliers,
    searchTerm,
    isLoading,
    newSupplier,
    editSupplier,
    currentSupplier,
    
    // Dialog states
    dialogOpen,
    editDialogOpen,
    detailDialogOpen,
    
    // Handlers
    setSearchTerm,
    setNewSupplier,
    setEditSupplier,
    setDialogOpen,
    setEditDialogOpen,
    setDetailDialogOpen,
    handleSearchChange,
    handleAddSupplier,
    handleEditSupplier,
    handleOpenEditDialog,
    handleDeleteSupplier,
    handleViewDetails,
    resetSuppliers
  };
}