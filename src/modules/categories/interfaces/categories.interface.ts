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
  setModalState: () => void;
  setCategories: (value: Category[]) => void;
}

export interface ResponseCategories {
  categories: Category[];
  currentPage: number;
  totalCategories: number;
  totalPages: number;
}

export interface RequestCategory extends Record<string, unknown> {
  name: string;
  description?: string;
  parentCategoryId?: string;
}
