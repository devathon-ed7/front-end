import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product.store";

export const useProductForm = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState<number>(0);
	const [category, setCategory] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const addProduct = useProductStore((state) => state.setProducts);
	const navigate = useNavigate();

	const onChangeUrl = (url: string) => {
		setImageUrl(url);
	};

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
