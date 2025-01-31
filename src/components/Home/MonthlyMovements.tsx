import { Box, Typography } from "@mui/material";

export const MonthlyMovements = () => {
  return (
    <Box >
      <Typography>Movimientos del mes</Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
       
      >
        <Box sx={{ border: "1px solid purple" }}>
          <Typography># Entradas: </Typography>
          <Typography># Salidas: </Typography>
        </Box>
      </Box>
    </Box>
  );
};