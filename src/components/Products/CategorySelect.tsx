import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

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
    <FormControl fullWidth>
      <InputLabel id="category-label">Categoría</InputLabel>
      <Select
        labelId="category-label"
        value={category}
        onChange={(e) => setCategory(e.target.value as string)}
        label="Categoría"
      >
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.name}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};