import { Box, Typography, CardContent, Card, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CardProductStyles";
import { Label } from "./Label";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
}

interface Props {
  product: Product;
  onDelete: (id: number) => void;
}

export const CardProduct = ({ product, onDelete }: Props) => {
  const {
    card,
    headerContainer,
    stockLabel,
    techLabel,
    image,
    imageContainer,
    buttonContainer,
    priceContainer,
  } = styles;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/productos/editar/${product.id}`);
  };

  return (
    <Card sx={card} elevation={0}>
      <CardContent>
        <Box sx={headerContainer}>
          <Label sx={stockLabel}>Stock: {product.stock}</Label>
          <Label sx={techLabel}>{product.category}</Label>
        </Box>
        <Box sx={imageContainer}>
          <CardMedia component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={image} 
          />         
        </Box>
        <Box sx={priceContainer}>
          <Typography variant="body1" fontWeight="500">
            Precio:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            ${product.price}
          </Typography>
        </Box>
        <Typography variant="body1" fontWeight="500">
          {product.name}
        </Typography>
      </CardContent>
    </Card>
  );
};