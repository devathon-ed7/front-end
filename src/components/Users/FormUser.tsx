import { Box, Button, SelectChangeEvent, TextField } from "@mui/material";
import { UserForm } from "@/interfaces/";
import { Roles } from "@/interfaces";
import { RoleSelect } from "@/components/RoleSelect";
import { ImageUpload } from "@/components/UI/ImageUpload";
import { ChangeEvent } from "react";
import "./Users.css";

interface Props {
  form: UserForm;
  rolesList: Roles[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: SelectChangeEvent) => void;
  setFile: (data: File) => void;
  handleSave: () => void;
  isDisabled: boolean;
}

export const FormUser = ({
  form,
  rolesList = [],
  handleInputChange,
  handleSelectChange,
  setFile,
  handleSave,
  isDisabled,
}: Props) => {
  return (
    <Box component="form" className="form-user">
      <TextField
        value={form.username || ""}
        onChange={handleInputChange}
        name="username"
        size="small"
        label="Usuario..."
        required
      />
      <TextField
        value={form.password || ""}
        onChange={handleInputChange}
        name="password"
        size="small"
        label="Contraseña..."
        type="password"
        required
      />
      <TextField
        value={form.name || ""}
        onChange={handleInputChange}
        name="name"
        size="small"
        label="Nombre..."
        required
      />
      <TextField
        value={form.email || ""}
        onChange={handleInputChange}
        size="small"
        type="email"
        label="E-mail..."
        name="email"
        required
      />
      <RoleSelect
        value={form.role_id || 0}
        onChange={handleSelectChange}
        roles={rolesList}
      />
      <ImageUpload onChange={setFile} />
      <Button
        onClick={handleSave}
        disabled={isDisabled}
        variant="contained"
        color="success"
        sx={{ px: "2em" }}
      >
        Save
      </Button>
    </Box>
  );
};
