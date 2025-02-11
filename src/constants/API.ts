export const API = import.meta.env.PROD
  ? "/"
  : import.meta.env.VITE_BACKEND_SERVER;
  
export const baseUrl = "api/v1";
export const GithubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID
