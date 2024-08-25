import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { nanoid } from "nanoid";

export const RoleSelect = ({ value, onChange, roles }) => {
  return (
    <FormControl fullWidth size="small" required>
      <InputLabel id="role-select-label">Seleccione Rol...</InputLabel>
      <Select
        labelId="role-select-label"
        id="role-select"
        value={value || ""}
        label="Rol"
        name="role_id"
        onChange={onChange}
      >
        {(roles || []).map(({ id, name }) => (
          <MenuItem key={nanoid()} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};