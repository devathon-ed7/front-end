import { useNavigate } from "react-router-dom";

export const UserHeader = () => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center gap-2.5">
			<h1 className="text-xl font-bold text-primary-dark">
				Listado de usuarios
			</h1>
			<button
				onClick={() => navigate("/usuarios/nuevo")}
				className="px-8 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
			>
				Nuevo
			</button>
		</div>
	);
};
