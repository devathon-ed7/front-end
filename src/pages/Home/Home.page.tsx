import { useProducts } from "@/hooks/useProducts";
import { Box, Typography } from "@mui/material";
import { GeneralProducts,MonthlyMovements } from "@/components";

export const HomePage = () => {
  const { products } = useProducts();
  const totalProducts = products.length;
  const activeProducts = products.filter(({ stock }) => stock >= 1).length;
  const inactiveProducts = products.filter(({ stock }) => stock < 0).length;

  return (
    <Box >
      <Typography
        align="center"
        variant="h4"
        sx={{ color: "#1F3A5F", fontWeight: "bold" }}
      >
        Bienvenido al sistema de inventario
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
       
      >
        <GeneralProducts
          totalProducts={totalProducts}
          activeProducts={activeProducts}
          inactiveProducts={inactiveProducts}
        />
        <MonthlyMovements />
      </Box>
    </Box>
  );
};