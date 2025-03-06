import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Product, ProductState } from "../interfaces/product.interface";

const ProductApi: StateCreator<ProductState, [["zustand/devtools", never]]> = (
  set
) => ({
  products: [],
  setProducts: (value: Product[]) =>
    set({ products: value }, false, "SET_PRODUCTS"),
});

export const useProductStore = create<ProductState>()(
  devtools(
    persist(ProductApi, {
      name: "product-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
