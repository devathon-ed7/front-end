import { Box, Typography } from "@mui/material";

interface ImagePreviewProps {
  file: File | null;
  image?: string | null;
  altText?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  file,
  image = null,
  altText = "imgProfile",
}) => {
  const imageSrc = file ? URL.createObjectURL(file) : image;

  return (
    <Box className="preview-image">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            border: "2px solid",
            borderColor: "info.light",
          }}
        />
      ) : (
        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "info.main",
            border: "2px solid",
            borderColor: "info.light",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0 3px 6px #00000035",
            }}
          >
            Sin imagen
          </Typography>
        </Box>
      )}
    </Box>
  );
};
