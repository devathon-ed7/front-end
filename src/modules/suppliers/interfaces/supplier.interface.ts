export interface Product {
  id: number;
  name: string;
  description: string;
  stock: number;
}

export interface Supplier {
  id: number;
  name: string;
  location: string;
  contact: string;
  products: Product[];
}

export interface NewSupplier {
  name: string;
  location: string;
  contact: string;
}

export interface EditSupplier {
  id: number;
  name: string;
  location: string;
  contact: string;
}