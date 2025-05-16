import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Category, CategoryState } from "../interfaces/categories.interface";

const CategoriesApi: StateCreator<
  CategoryState,
  [["zustand/devtools", never]]
> = (set) => ({
  categories: [],
  modalState: false,

  setCategories: (value: Category[]) =>
    set({ categories: value }, false, "SET_CATEGORIES"),

  setModalState: (isOpen: boolean) => set({ modalState: isOpen }),
});

export const useCategoriesStore = create<CategoryState>()(
  devtools(
    persist(CategoriesApi, {
      name: "categories-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
