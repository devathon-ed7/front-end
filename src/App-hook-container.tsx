import AppRouter from "@/router/app-router";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";


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