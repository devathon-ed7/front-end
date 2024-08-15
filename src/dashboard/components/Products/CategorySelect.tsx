import { MenuItem } from "@mui/material";
import { FormControl, InputLabel, Select } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type CategoryType = "Categoria 1" | "Categoria 2" | "Categoria 3";
interface Props {
  category: CategoryType;
  setCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategorySelect = ({ category, setCategory }:Props) => (
    <FormControl sx={{ minWidth: 300 }}>
      <InputLabel id="category-select-label">Seleccione una categoria</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={category}
        label="Seleccione una categoria"
        onChange={(e) => setCategory(e.target.value as CategoryType)}
      >
        <MenuItem value={"Categoria 1"}>Categoria 1</MenuItem>
        <MenuItem value={"Categoria 2"}>Categoria 2</MenuItem>
        <MenuItem value={"Categoria 3"}>Categoria 3</MenuItem>
      </Select>
    </FormControl>
  );