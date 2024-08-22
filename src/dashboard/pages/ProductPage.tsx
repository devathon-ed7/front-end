import { Box, Grid, Typography, Button } from "@mui/material";
import { Breadcrumb, CardProduct } from "../components";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";


export const ProductPage = () => {
  const { getProducts, products } = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

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
          {Array.isArray(products) && products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <CardProduct product={product} onDelete={""} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};