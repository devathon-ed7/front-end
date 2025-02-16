import { useNavigate } from "react-router-dom";
import { Label } from "../ui/Label____.tsx";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category_id: number;
  imageUrl: string;
}

interface Props {
  product: Product;
  onDelete: (id: number) => void;
}

export const CardProduct = ({ product, onDelete }: Props) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/productos/editar/${product.id}`);
  };

  return (
    <div className="bg-white shadow-none rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <Label className="text-gray-700">Stock: {product.stock}</Label>
          <Label className="text-gray-700">{product.category_id}</Label>
        </div>
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
            <button
              className="bg-yellow-500 text-white border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600"
              onClick={handleEdit}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white border border-red-600 px-4 py-2 rounded hover:bg-red-600 ml-2"
              onClick={() => onDelete(product.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-medium">Precio:</span>
          <span className="font-bold">${product.price}</span>
        </div>
        <p className="font-medium mt-1">{product.name}</p>
      </div>
    </div>
  );
};