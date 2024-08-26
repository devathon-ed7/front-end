import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { routeNames } from "../utils/routeName";
export const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  const routeName = useMemo(() => {
    const parts = path.split("/");
    if (parts[1] === "usuarios" && parts[2] === "editar") {
      return "Usuarios > Editar";
    }

    for (const [route, name] of Object.entries(routeNames)) {
      if (route.includes(":")) {
        const regex = new RegExp(route.replace(":", "\\d+"));
        if (regex.test(path)) {
          return name;
        }
      } else if (route === path) {
        return name;
      }
    }

    return "Desconocido";
  }, [path]);
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
