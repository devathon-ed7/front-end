import { useNavigate } from "react-router-dom";

export const ProductPage = () => {
	const navigate = useNavigate();
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
			
		</div>
	);
};
