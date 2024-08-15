import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { productStore } from "../store/dashboard/productStore"; 

export const useProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState<string>(null);
  const addProduct = productStore((state) => state.addProduct);
  const navigate = useNavigate();

  const onChangeUrl = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSave = useCallback(() => {
    if (!name || !price || !category) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      stock,
      category,
      imageUrl,
    };
    addProduct(newProduct);
    navigate("/productos");
  }, [name, price, stock, category, imageUrl, addProduct, navigate]);

  return {
    name,
    setName,
    price,
    setPrice,
    stock,
    setStock,
    category,
    setCategory,
    imageUrl,
    onChangeUrl,
    handleSave,
  };
};