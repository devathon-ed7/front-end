import { create, StateCreator } from "zustand";
import { Product, ProductState } from "@/interfaces";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

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
