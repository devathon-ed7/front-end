import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
interface Props {
  category: string;
  setCategory: (category: string) => void;
}
export const CategorySelect = ({ category, setCategory }: Props) => (
  <FormControl sx={{ minWidth: 300 }}>
    <InputLabel id="category-select-label">Seleccione una categoria</InputLabel>
    <Select
      labelId="category-select-label"
      id="category-select"
      value={category}
      label="Seleccione una categoria"
      onChange={({ target }) => setCategory(target.value as string)}
    >
      <MenuItem value={"Categoria 1"}>Categoria 1</MenuItem>
      <MenuItem value={"Categoria 2"}>Categoria 2</MenuItem>
      <MenuItem value={"Categoria 3"}>Categoria 3</MenuItem>
    </Select>
  </FormControl>
);
