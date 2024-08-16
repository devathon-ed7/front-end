import { Box, Button, Typography } from "@mui/material";
import { FormNewUser } from "./FormNewUser";

export const NewUser = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        columnGap: "2.25em",
        mt: "1em",
      }}
    >
      <Box sx={{ display: "grid", rowGap: "0.625em", justifyItems: "start" }}>
        <FormNewUser />
        <Button disabled variant="outlined" color="success" sx={{ px: "2em" }}>
          Guardar
        </Button>
      </Box>
      {/* PreviewImageLoaded */}
      <Box sx={{ width: "12.5em", height: "12.5em" }}>
        {/* TODO:Mostrar imagen cargada */}
        <Box
          sx={{
            display: "grid",
            placeContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "info.main",
            border: "2px solid",
            borderColor: "info.light",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "0 3px 6px #00000035",
            }}
          >
            Sin imagen
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
