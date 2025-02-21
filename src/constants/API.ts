export const API = import.meta.env.PROD
  ? "/"
  : import.meta.env.VITE_BACKEND_SERVER;
  
export const baseUrl = "api/v1";
export const GithubClientId = encodeURIComponent(import.meta.env.VITE_GITHUB_CLIENT_ID);
export const GoogleClientId = encodeURIComponent(import.meta.env.VITE_GOOGLE_CLIENT_ID);
export const GoogleRedirectUri = encodeURIComponent(import.meta.env.VITE_GOOGLE_REDIRECT_URI);
export const GoogleScope = 'profile email';
