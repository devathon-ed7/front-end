// High order component
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./Theme";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
