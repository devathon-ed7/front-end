import { Button } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const ImageUpload = ({ onChange }) => {
  const handleCaptureImageByCamera = async (event) => {
    const files = event.target.files;
    if (!files || files?.length <= 0) {
      event.target.value = "";
      return;
    }

    onChange(files[0]);

    event.target.value = "";
  };

  return (
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
        onChange={handleCaptureImageByCamera}
      />
    </Button>
  );
};