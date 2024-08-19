import { Box, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant='h4' sx={{ color: "#1F3A5F", fontWeight: 'bold' }}>
        Bienvenido al sistema de inventario
      </Typography>
    </Box>
  );
};