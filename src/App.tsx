import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
const MainRouter = lazy(() => import("./router/main-router"));
const AppTheme = lazy(() => import("./theme/AppTheme"));

function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <SnackbarProvider maxSnack={3}>
          <MainRouter />
        </SnackbarProvider>
      </AppTheme>
    </BrowserRouter>
  );
}

export default App;
