import { Box, Typography } from "@mui/material";
import { FormLogin } from "../components/FormLogin";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      sxProps={{
        fontSize: { xs: "0.6875em", lg: "1em" },
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        rowGap: { xs: "1em", lg: "2em" },
        pt: "5em",
      }}
    >
      <Typography
        sx={{
          color: "white",
          textDecoration: "underline",
          textShadow: "0 3px 6px #00000035",
          fontSize: "2.5em",
          fontWeight: "bold",
        }}
      >
        Sistema de inventario
      </Typography>

      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "95vw", md: "60vw", xl: "50vw" },
          border: "5px solid",
          borderColor: "primary.dark",
          padding: { xs: "2.5em 3em", lg: "3.125em 12.5em" },
          display: "flex",
          flexDirection: "column",
          rowGap: "1em",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary.dark",
            fontWeight: "bold",
            fontSize: "1.75em",
            textDecoration: "underline",
          }}
        >
          Inicio de sesión
        </Typography>
        <FormLogin />
      </Box>
    </AuthLayout>
  );
};
