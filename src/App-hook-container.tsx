import i18n from "@/core/i18n";
import { Toaster } from "@/shared/components/UI/sonner";
import { I18nextProvider } from "react-i18next";
import { lazy, Suspense } from "react";
import App from "./App";
import AppRouter from "./core/router/app-router";
import { ThemeProvider } from "./shared/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const ReactQueryDevtools = lazy(() => 
  import('@tanstack/react-query-devtools').then(module => ({ 
    default: module.ReactQueryDevtools 
  }))
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
    },
  },
});
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
      {process.env.NODE_ENV === 'development' && (
        <Suspense fallback={null}>
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      )}
    </QueryClientProvider>
  );
}

export default AppHookContainer;
