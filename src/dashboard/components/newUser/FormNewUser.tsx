import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ChangeEvent, useState } from "react";
export const FormNewUser = () => {
  const [ImageUrl, setImageUrl] = useState<string>("");
  const handleCaptureImageByCamera = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files?.length <= 0) {
      event.target.value = "";
      return;
    }

    console.log({ file: files[0], url: event.target.value });
    setImageUrl(URL.createObjectURL(files[0]));
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
      <TextField value={undefined} size="small" label="Usuario..." required />
      <TextField value={undefined} size="small" label="Nombre..." required />
      <TextField
        value={undefined}
        size="small"
        type="email"
        label="E-mail..."
        required
      />
      <FormControl fullWidth size="small" required>
        <InputLabel id="demo-simple-select-label">Seleccione Rol...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={undefined}
          label="Age"
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Operator</MenuItem>
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
          //   capture="user"
          onChange={handleCaptureImageByCamera}
        />
      </Button>

      <img src={ImageUrl} alt="IMG" />
    </Box>
  );
};
