import { SnackbarProvider } from "notistack";
import { lazy } from "react";
import AppRouter from "@/router/app-router";
const AppTheme = lazy(() => import("./theme/AppTheme"));

function App() {
  return (
    <AppRouter>
      <AppTheme>
        <SnackbarProvider maxSnack={3}>
          
        </SnackbarProvider>
      </AppTheme>
    </AppRouter>
  );
}

export default App;
