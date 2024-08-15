import { useState, useCallback, useMemo } from "react";

export const useProducts = () => {
  const initialProducts = useMemo(() => 
    Array.from({ length: 12 }, (_, index) => ({ id: index, name: `Producto ${index + 1}` })), 
    []
  );

  const [products, setProducts] = useState(initialProducts);

  const handleDelete = useCallback((id: number): void => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  }, []);

  return { products, handleDelete };
};