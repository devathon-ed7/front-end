import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { AppTheme } from "./theme/AppTheme";

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
