import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FloatingMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<button
				className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition duration-300"
				onClick={handleClick}
			>
				<PlusIcon />
			</button>
			{isOpen && (
				<div className="absolute bottom-16 right-4 bg-white shadow-lg rounded-md">
					<div className="flex flex-col">
						<Link
							to="/home"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							onClick={handleClose}
						>
							Inicio
						</Link>
						<Link
							to="/usuarios"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							onClick={handleClose}
						>
							Usuarios
						</Link>
						<Link
							to="/productos"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							onClick={handleClose}
						>
							Productos
						</Link>
						<Link
							to="/categorias"
							className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							onClick={handleClose}
						>
							Categorías
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};
