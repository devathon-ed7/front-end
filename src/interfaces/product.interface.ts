export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    imageUrl: string;
}

export interface ProductState {
    updateProduct: (updatedProduct: Product) => void;
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
}