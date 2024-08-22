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
    setProducts: (products: Product[]) => void;
    // addProduct: (product: Product) => void;
    // updateProduct: (updatedProduct: Product) => void;
    // deleteProduct: (id: number) => void;
}