import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      light: "#63A4FF",
      main: "#3E72BC",
      dark: "#1F3A5F",
    },
    secondary: {
      light: "#3EBCB6",
      main: "#31A09B",
      dark: "#1C5653",
    },
    tertiary: {
      light: "#8867FF",
      main: "#593EBC",
      dark: "#291C56",
      contrastText: "white",
    },
    error: {
      light: "#F86060",
      main: "#F13333",
      dark: "#CB2D2D",
    },
    warning: {
      light: "#FFB64C",
      main: "#FFA625",
      dark: "#FB8B00",
    },
    info: {
      light: "#666768",
      main: "#464849",
      dark: "#252627",
    },
    success: {
      light: "#6EC583",
      main: "#20AC4F",
      dark: "#048B3A",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    button: {
      textTransform: "none",
      textShadow: "0 3px 6px #00000016",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fontWeight: "bold",
          borderWidth: "2px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        inputProps: { style: { fontWeight: "600" } },
      },
    },
  },
});
