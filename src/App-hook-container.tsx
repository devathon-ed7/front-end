import AppRouter from "@/router/app-router";
import { Container } from "lucide-react";
import { ReactNode } from "react";
import App from "./App";

function AppHookContainer() {
  return (
    <AppRouter>
      <App />
    </AppRouter>
  );
}

export default AppHookContainer;