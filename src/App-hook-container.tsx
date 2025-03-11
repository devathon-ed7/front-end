import App from "./App";
import AppRouter from "./core/router/app-router";
import { ThemeProvider } from "./shared/components/theme-provider";
import { Toaster } from "@/shared/components/UI/sonner";
import i18n from "@/core/i18n";
import { I18nextProvider } from "react-i18next";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
function AppHookContainer() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppRouter>
          <I18nextProvider i18n={i18n} defaultNS={"translation"}>
            <App />
            <Toaster />
          </I18nextProvider>
        </AppRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default AppHookContainer;
