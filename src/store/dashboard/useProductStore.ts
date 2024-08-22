import {create} from 'zustand';
import { Product, ProductState } from '../../interfaces';


export const useProductStore = create<ProductState>((set) => ({
  products: [],
  categories: [] ,
  setProducts: (products: Product[]) => set({ products }),
  setCategories: (categories: Product[]) => set({ categories }),
}));


// export const useProductStore = create<ProductState>((set) => ({
//   products: [],
//   updateProduct: (updatedProduct) => set((state) => ({
//     products: state.products.map((product) =>
//       product.id === updatedProduct.id ? updatedProduct : product
//     ),
//   })),
//   addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
//   deleteProduct: (id: number) => set((state) => ({
//     products: state.products.filter((product) => product.id !== id)
//   })),
// }));