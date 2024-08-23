export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    imageUrl: string;
}

export interface ProductState {
    products: Product[];
    categories: string[];
    setProducts: (products: Product[]) => void;
    setCategories: (categories: string[]) => void;
    // addProduct: (product: Product) => void;
    // updateProduct: (updatedProduct: Product) => void;
    // deleteProduct: (id: number) => void;
}