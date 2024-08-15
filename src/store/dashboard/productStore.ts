import create from 'zustand';
import {ProductState } from '../../interfaces/index.interface';

export const productStore = create<ProductState>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
}));