import { Box, Grid, Typography, Button } from "@mui/material";
import { Breadcrumb } from "../components/Breadcrumb";
import { CardProduct } from "../components/CardProduct";
import { useNavigate } from "react-router-dom";
import { productStore } from "../../store/dashboard/productStore"; 

export const ProductPage = () => {
  const products = productStore((state) => state.products);
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/productos/nuevo");
  };

  return (
    <Box>
      <Breadcrumb />
      <Box display="flex" gap={2} my={4}>
        <Typography>Listado de productos</Typography>
        <Button variant="contained" onClick={handleNewProduct}>Nuevo</Button>
      </Box>
      <Box sx={{ height: '400px', overflowY: 'auto' }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <CardProduct product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};