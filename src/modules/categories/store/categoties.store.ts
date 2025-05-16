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

  setModalState: () => set((state) => ({ modalState: !state.modalState })),
});

export const useCategoriesStore = create<CategoryState>()(
  devtools(
    persist(CategoriesApi, {
      name: "categories-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);
