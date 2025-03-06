import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Category, CategoryState } from "../interfaces/categories.interface";

const CategoriesApi: StateCreator<
  CategoryState,
  [["zustand/devtools", never]]
> = (set) => ({
  categories: [],
  setCategories: (value: Category[]) =>
    set({ categories: value }, false, "SET_CATEGORIES"),
});

export const useCategoriesStore = create<CategoryState>()(
  devtools(
    persist(CategoriesApi, {
      name: "categories-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
