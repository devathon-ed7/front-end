export interface Category {
	id: number;
	name: string;
}

export interface CategoryState {
	categories: Category[];
	setCategories: (value: Category[]) => void;
}

export interface ResponseCategories {
	categories: Category[];
}
