interface Category {
  id: number;
  name: string;
  description: string;
}

interface CategorySelectProps {
  category: string;
  setCategory: (category: string) => void;
  categories: Category[];
}

export const CategorySelect = ({
  category,
  setCategory,
  categories,
}: CategorySelectProps) => {
  return (
    <div className="relative w-full">
      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
        Categoría
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Selecciona una categoría
        </option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};