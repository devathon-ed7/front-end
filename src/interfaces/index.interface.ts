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
export interface User extends UserDetails {
  id?: string;
  idUser?: string;
  username?: string;
}
export interface UserDetails {
  name?: string;
  email?: string;
  role?: string;
  role_id?: string;
  profile_filename?: string | null;
}
export interface Roles {
  id: number;
  name: string;
  description: string;
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
  updateProduct: (updatedProduct: Product) => void;
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}