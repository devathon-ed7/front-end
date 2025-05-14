export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface CategoryState {
  categories: Category[];
  setCategories: (value: Category[]) => void;
}

export interface ResponseCategories {
  categories: Category[];
  currentPage: number;
  totalCategories: number;
  totalPages: number;
}
