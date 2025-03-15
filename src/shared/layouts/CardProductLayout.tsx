import { Label } from "../components/UI/Label____";

interface Props {
	name?: string;
	price?: string;
	stock?: number;
	category?: string;
	imageUrl?: string;
}

export const CardProductLayout = ({
	name = "--",
	stock = 0,
	category = "--",
	imageUrl,
	price = "0.00",
}: Props) => {
	return (
		<div className="border rounded-md shadow-md overflow-hidden">
			<div className="relative text-white">
				<div className="flex gap-16">
					{stock === 0 ? (
						<Label className="bg-red-600 p-1">Stock: 0</Label>
					) : (
						<Label className="bg-green-600 p-1">Stock: {stock}</Label>
					)}
					<Label className="bg-black p-1">{category || "--"}</Label>
				</div>
				<div className="w-[264px] h-[250px] max-h-[250px]">
					{imageUrl ? (
						<img
							src={imageUrl}
							alt={name}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="bg-gray-500 flex justify-center items-center text-white font-bold h-full w-full">
							Sin imagen
						</div>
					)}
				</div>
			</div>
			<div className="flex gap-40">
				<span className="font-medium">Precio:</span>
				<span className="font-bold">
					{isNaN(Number(price)) ? "$0.00" : `$${Number(price).toFixed(2)}`}
				</span>
			</div>
			<p className="font-medium">{name}</p>
		</div>
	);
};
