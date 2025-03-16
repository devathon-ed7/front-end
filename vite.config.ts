import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Dependencias React principales
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // Componentes Radix UI separados por funcionalidad
          'ui-base': ['@radix-ui/react-slot', '@radix-ui/react-label'],
          'ui-layout': ['@radix-ui/react-dialog', '@radix-ui/react-separator', '@radix-ui/react-collapsible'],
          'ui-navigation': ['@radix-ui/react-navigation-menu', '@radix-ui/react-dropdown-menu'],
          'ui-data-display': ['@radix-ui/react-avatar', '@radix-ui/react-tooltip'],
          
          // Utilidades de UI (tienes varias dependencias pequeñas para CSS)
          'ui-utils': [
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'tailwindcss-animate',
            'next-themes'
          ],
          
          // Gráficos
          'charts': ['recharts'],
          
          // Iconos (tienes dos bibliotecas de iconos)
          'icons': ['lucide-react', 'react-icons'],
          
          // Lógica de autenticación
          'auth': [
            '@/modules/auth/store/auth-store',
            '@/modules/auth/hooks/use-auth',
            '@/modules/auth/hooks/use-oauth',
            'zustand'
          ],
          
          // Internacionalización
          'i18n': ['i18next', 'react-i18next'],
          
          // Utilidades de datos
          'data-utils': ['date-fns', 'nanoid'],
          
          // Manejo de peticiones HTTP
          'http': ['axios'],
          
          // React Query
          'query': ['@tanstack/react-query'],
          
          // Notificaciones
          'notifications': ['sonner']
        }
      }
    }
  }
});