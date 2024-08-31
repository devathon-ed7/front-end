import { Box, Skeleton } from "@mui/material";

export const LoginSkeleton = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
      }}
    >
      <Skeleton variant="text" width="50%" height={40} />
      <Skeleton variant="rectangular" width="60%" height={300} sx={{ mt: 2 }} />
      <Skeleton variant="text" width="40%" height={30} sx={{ mt: 2 }} />
      <Skeleton variant="text" width="30%" height={30} sx={{ mt: 1 }} />
    </Box>
  );
};
