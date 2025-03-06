import productService from "../services/products.service";
import { useProductStore } from "../store/product.store";


export const useProducts = () => {
  const setProducts = useProductStore((state) => state.setProducts);
  const products = useProductStore((state) => state.products);

  const getProducts = async () => {
    try {
      const resp = await productService.getProducts();
      const { products } = resp;
      setProducts(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  return { getProducts, products };
};
