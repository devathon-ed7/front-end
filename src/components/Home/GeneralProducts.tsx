import { Box, Typography } from "@mui/material";

interface Props {
  totalProducts: number;
  activeProducts: number;
  inactiveProducts: number;
}

export const GeneralProducts = ({
  totalProducts,
  activeProducts,
  inactiveProducts,
}: Props) => {
  return (
    <Box >
      <Typography>Generales</Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ border: "1px solid green",padding:'10px', borderRadius:'0px' }}
      >
        <Box >
          <Typography>Productos Registrados: {totalProducts}</Typography>
          <Typography>Productos Activos: {activeProducts}</Typography>
          <Typography>Productos Inactivos: {inactiveProducts}</Typography>
        </Box>
      </Box>
    </Box>
  );
};