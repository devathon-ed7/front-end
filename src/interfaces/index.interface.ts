export interface AuthState {
  checking: boolean;
  errorMessage: string | undefined;
  status: StatusSession;
  user: User | undefined;
}

export type StatusSession = "authenticated" | "not-authenticated" | "checking";

export interface UserLogin extends Required<Pick<User, "userName">> {
  password: string;
}
export interface User {
  userName?: string;
  role?: string;
}
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
  addProduct: (product: Product) => void;
}