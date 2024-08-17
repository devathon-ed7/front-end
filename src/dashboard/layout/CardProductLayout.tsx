import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Label } from "../components";

interface Props {
  name?: string;
  price?: string;
  stock?: number;
  category?: string;
  imageUrl?: string;
}

export const CardProductLayout = ({
  name = "--",
  stock = 0,
  category = "--",
  imageUrl,
  price = "0.00",
}: Props) => {
  const imageContainerStyles = {
    width: "264px",
    height: "250px",
    maxHeight: "250px",
  };

  return (
    <Card elevation={0}>
      <CardContent>
        <Box sx={{ position: "relative", color: "white" }}>
          <Box display="flex" gap="8.35rem">
            {stock == 0 ? (
              <Label sx={{ backgroundColor: "red", padding: "4px" }}>
                Stock: 0
              </Label>
            ) : (
              <Label sx={{ backgroundColor: "#388E3C", padding: "4px" }}>
                Stock: {stock}
              </Label>
            )}

            <Label sx={{ backgroundColor: "black", padding: "4px" }}>
              {category || "--"}
            </Label>
          </Box>
          <Box sx={imageContainerStyles}>
            {imageUrl ? (
              <CardMedia
                component="img"
                image={imageUrl}
                alt={name}
                sx={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Box
                sx={{
                  backgroundColor: "grey",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  height: "100%",
                  width: "100%",
                }}
              >
                Sin imagen
              </Box>
            )}
          </Box>
        </Box>
        <Box display="flex" gap="10.5rem">
          <Typography variant="body1" fontWeight="500">
            Precio:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {isNaN(Number(price)) ? "$0.00" : `$${Number(price).toFixed(2)}`}
          </Typography>
        </Box>
        <Typography variant="body1" fontWeight="500">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};