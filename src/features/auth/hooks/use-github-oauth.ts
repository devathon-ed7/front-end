import { useAuthStore } from "@/store/auth-store";


export const useGithubOauth = () => {
  const setStatusAuth = useAuthStore((state) => state.setStatus);
  //const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const GithubCallback = async (token: string) => {
      setStatusAuth("authenticated");
      setToken(token);
  };

  return {
    GithubCallback,
  };
};
