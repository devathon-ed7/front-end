import AppRouter from "@/router/app-router";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";

function AppHookContainer() {
  return (
    <ThemeProvider>
    <AppRouter>
      
        <App />
      
    </AppRouter>
    </ThemeProvider>
  );
}

export default AppHookContainer;