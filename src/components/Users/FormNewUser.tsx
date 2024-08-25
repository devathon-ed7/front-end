import { Box, SelectChangeEvent, TextField } from "@mui/material";
import { NewUserForm } from "@/interfaces/";
import { Roles } from "@/interfaces";
import { RoleSelect } from "@/components/RoleSelect";
import { ImageUpload } from "@/components/ImageUpload";
import { ChangeEvent } from "react";

interface Props {
  form: NewUserForm;
  rolesList: Roles[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: SelectChangeEvent) => void;
  setFile: (data: File) => void;
}

export const FormNewUser = ({
  form,
  rolesList = [],
  handleInputChange,
  handleSelectChange,
  setFile,
}: Props) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "0.625em",
        width: "15.625em",
      }}
    >
      <TextField
        value={form.username}
        onChange={handleInputChange}
        name="username"
        size="small"
        label="Usuario..."
        required
      />
      <TextField
        value={form.password}
        onChange={handleInputChange}
        name="password"
        size="small"
        label="Contraseña..."
        type="password"
        required
      />
      <TextField
        value={form.name}
        onChange={handleInputChange}
        name="name"
        size="small"
        label="Nombre..."
        required
      />
      <TextField
        value={form.email}
        onChange={handleInputChange}
        size="small"
        type="email"
        label="E-mail..."
        name="email"
        required
      />
      <RoleSelect value={form.role_id || ""} onChange={handleSelectChange} roles={rolesList} />
      <ImageUpload onChange={setFile} />
    </Box>
  );
};