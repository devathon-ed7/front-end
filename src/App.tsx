import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { AppTheme } from "./theme/AppTheme";

function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <MainRouter />
      </AppTheme>
    </BrowserRouter>
  );
}

export default App;
