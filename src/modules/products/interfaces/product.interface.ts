export interface Product {
	id: number;
	name: string;
	price: number;
	stock: number;
	category: string;
	profile_filename: string;
	category_id: number;
	supplier_id: number;
}

export interface ProductState {
	products: Product[];
	setProducts: (value: Product[]) => void;
}
