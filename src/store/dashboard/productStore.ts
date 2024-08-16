import create from 'zustand';
import { ProductState } from '../../interfaces/index.interface';

export const productStore = create<ProductState>((set) => ({
  products: [],
  updateProduct: (updatedProduct) => set((state) => ({
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ),
  })),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id)
  })),
}));