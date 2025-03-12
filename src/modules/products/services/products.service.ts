import { apiDelete, apiGet, apiPostFormData } from "@/core/config/axiosConfig";
import { Product } from "../interfaces/product.interface";

const getProducts = async () => {
	try {
		return await apiGet<Product[]>("/products");
	} catch (error) {
		if (error instanceof Error) {
			throw error.message;
		}
		throw String(error);
	}
};

const newProduct = async (formData: FormData) => {
	try {
		return await apiPostFormData<Product>("/products", formData);
	} catch (error) {
		if (error instanceof Error) {
			throw error.message;
		}
		throw String(error);
	}
};

const deleteProduct = async (id: string) => {
	try {
		await apiDelete(`/products/${id}`);
	} catch (error) {
		if (error instanceof Error) {
			throw error.message;
		}
		throw String(error);
	}
};

const productService = {
	getProducts,
	newProduct,
	deleteProduct,
	// getCategories,
};

export default productService;
