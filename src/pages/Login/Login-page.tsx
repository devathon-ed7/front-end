import { useRef } from "react";
import { Box, CardMedia, Container, Paper, Typography } from "@mui/material";
import { LoginForm } from "@/components";
import { t } from "i18next";
import AuthLayout from "@/layouts/Auth-layout";


const LoginPage = () => {

  const imageUrlRef = useRef('/android-chrome-512x512.png');
  const imageNameRef = useRef('logo');

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
          pt: "3em",
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "0.25em",
          textAlign: "center",
          textShadow: "0 3px 6px #00000035",
        }}>
          <CardMedia
                component="img"
                image={imageUrlRef.current}
                alt={imageNameRef.current}
                sx={{ width: "6em", height: "6em" }}
              />
          <Typography
            sx={{
              color: "white",
              textDecoration: "none",
              
              fontSize: "2.5em",
              fontWeight: "bold",
            }}
          >
            {t("login.title")}
          </Typography>

          <Typography
            sx={{
              color: "white",
              textDecoration: "none",
           
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            {t("login.subtitle")}
          </Typography>
        </Box>

        <Container maxWidth="xs"
        > 
          <Paper elevation={10} sx={{ p: "2em", borderRadius: "0.25em" }}>
            <LoginForm />
          </Paper>
        </Container>
      </AuthLayout>
  
  );
};

export default LoginPage;