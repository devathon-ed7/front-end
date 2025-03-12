import { useProducts } from "@/modules/products/hooks/useProducts";
import { CardProduct } from "@/shared/components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
	const { getProducts, products } = useProducts();
	const navigate = useNavigate();

	useEffect(() => {
		getProducts();
	}, []);

	const handleNewProduct = () => {
		navigate("/productos/nuevo");
	};

	return (
		<div className="p-4">
			<div className="flex gap-2 my-4">
				<h2 className="text-lg font-semibold">Listado de productos</h2>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
					onClick={handleNewProduct}
				>
					Nuevo
				</button>
			</div>
			<div className="h-96 overflow-y-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{Array.isArray(products) &&
						products.map((product) => (
							<div key={product.id}>
								<CardProduct product={product} onDelete={product.id} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
