import productService from '@/dashboard/services/products.service';
import { useProductStore } from '@/store/dashboard/useProductStore';

export const useProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);
  const setCategories = useProductStore((state) => state.setCategories);
  const categories = useProductStore((state) => state.categories);

  const getProducts = async () => {
    try {
      const resp = await productService.getProducts();
      const { products } = resp;
      setProducts(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const getCategories = async () => {
    try {
      const resp = await productService.getCategories();
      setCategories(resp.categories);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

  return { getProducts, products, getCategories, categories };
};