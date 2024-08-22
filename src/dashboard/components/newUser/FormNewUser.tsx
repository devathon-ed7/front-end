import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { NewUserForm } from "@/interfaces/users.interface";
import { Roles } from "@/interfaces";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { SelectChangeEvent } from "@mui/material";
import { nanoid } from "nanoid";
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
  const handleCaptureImageByCamera = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files?.length <= 0) {
      event.target.value = "";
      return;
    }

    setFile(files[0]);

    event.target.value = "";
  };

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
      <FormControl fullWidth size="small" required>
        <InputLabel id="demo-simple-select-label">Seleccione Rol...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.role_id || ""}
          label="Rol"
          name="role_id"
          onChange={handleSelectChange}
        >
          {rolesList.map(({ id, name }) => (
            <MenuItem key={nanoid()} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        component="label"
        startIcon={<AddAPhotoIcon />}
        sx={{ fontWeight: "bold", fontSize: "0.95em" }}
      >
        Cargar imagen
        <input
          accept="image/png, image/jpeg, image/jpg"
          hidden
          type="file"
          name="profile_filename"
          //   capture="user"
          onChange={handleCaptureImageByCamera}
        />
      </Button>
    </Box>
  );
};
