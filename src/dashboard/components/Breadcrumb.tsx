import { Box,Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const routeNames: { [key: string]: string } = {
  "/usuarios": "Usuarios",
  "/roles": "Roles",
  "/permisos": "Permisos",
  "/productos": "Productos",
  "/categorias": "Categorias",
};

export const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  //   console.log(path)
  const routeName = routeNames[path] || "Desconocido";
  //   console.log(routeName)

  return (
    <Box sx={{ display: "inline-block" }}>
      <Typography
        variant="subtitle1"
        sx={{
          color: "grey",
          fontSize: "extra",
          fontWeight: 720,
          textDecoration: "underline",
          textDecorationThickness: "1px",
        }}
      >
        Panel &gt; {routeName}
      </Typography>
    </Box>
  );
};
