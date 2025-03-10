import App from "./App";
import AppRouter from "./core/router/app-router";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Toaster } from "@/shared/components/UI/sonner";
import i18n from "@/core/i18n";
import { I18nextProvider } from "react-i18next";

function AppHookContainer() {
  return (
    <ThemeProvider>
      <AppRouter>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <App />
          <Toaster />
        </I18nextProvider>
      </AppRouter>
    </ThemeProvider>
  );
}

export default AppHookContainer;
