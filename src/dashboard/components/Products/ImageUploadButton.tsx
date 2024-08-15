import { Box, Button } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ChangeEvent } from "react";

interface Props {
    onChangeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const ImageUploadButton = ({ onChangeUrl }:Props) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AddPhotoAlternateIcon sx={{ marginRight: 1, color: "darkgreen" }} />
      <Button variant="outlined" color="success" component="label">
        Cargar Imagen
        <input type="file" hidden onChange={onChangeUrl} />
      </Button>
    </Box>
  );