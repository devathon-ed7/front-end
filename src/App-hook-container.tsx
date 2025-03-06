import App from "./App";
import AppRouter from "./core/router/app-router";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Toaster } from "./shared/components/UI/sonner";


function AppHookContainer() {
  return (
    <ThemeProvider>
      <AppRouter>

        <App />
        <Toaster />
      </AppRouter>

    </ThemeProvider>
  );
}

export default AppHookContainer;