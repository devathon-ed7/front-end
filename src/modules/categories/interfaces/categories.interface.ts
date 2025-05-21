export interface Category {
  id: string;
  name: string;
  description: string;
  parentCategoryId: string | null;
  children?: Category[];
}

export interface CategoryState {
  categories: Category[];
  modalState: boolean;
  selectedCategory: Category | null;
  setModalState: (value: boolean) => void;
  setCategories: (value: Category[]) => void;
  setSelectedCategory: (value: Category | null) => void;
}

export interface ResponseCategories {
  categories: Category[];
  currentPage: number;
  totalCategories: number;
  totalPages: number;
}

export interface RequestCategory extends Record<string, unknown> {
  id?: string;
  name: string;
  description?: string;
  parentCategoryId?: string | null;
  children?: Category[] | null;
}

export interface ResponseCategory extends Category {}

export interface CategoriesData {
  categories: Category[];
}
