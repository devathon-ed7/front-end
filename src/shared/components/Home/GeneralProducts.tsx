interface Props {
	totalProducts: number;
	activeProducts: number;
	inactiveProducts: number;
}

export const GeneralProducts = ({
	totalProducts,
	activeProducts,
	inactiveProducts,
}: Props) => {
	return (
		<div className="p-4">
			<h2 className="text-lg font-semibold">Generales</h2>
			<div className="flex justify-between border border-green-500 p-2">
				<div>
					<p>Productos Registrados: {totalProducts}</p>
					<p>Productos Activos: {activeProducts}</p>
					<p>Productos Inactivos: {inactiveProducts}</p>
				</div>
			</div>
		</div>
	);
};
