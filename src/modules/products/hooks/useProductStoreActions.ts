import { useProductStore } from "../store/product.store";


export const useProductStoreActions = () => {
  const products = useProductStore((state) => state.products);

  return { products };
};

// export const useProductStoreActions = () => {
//   const products = useProductStore((state) => state.products);
//   const updateProduct = useProductStore((state) => state.updateProduct);
//   const addProduct = useProductStore((state) => state.addProduct);
//   const deleteProduct = useProductStore((state) => state.deleteProduct);

//   return { products, updateProduct, addProduct, deleteProduct };
// };
