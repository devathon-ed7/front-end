import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const UserHeader = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.625em" }}>
      <Typography
        sx={{ fontSize: "1.125em", fontWeight: "bold", color: "primary.dark" }}
      >
        Listado de usuarios
      </Typography>
      <Button
        onClick={() => navigate("/usuarios/nuevo")}
        variant="contained"
        size="small"
        sx={{ px: "2em" }}
      >
        Nuevo
      </Button>
    </Box>
  );
};
