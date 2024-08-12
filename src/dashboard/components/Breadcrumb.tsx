import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { routeNames } from "../utils/routeName";
export const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;
  const routeName = useMemo(() => routeNames[path] || "Desconocido", [path]);
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