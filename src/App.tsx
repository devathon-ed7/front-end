import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { useOauth } from "./modules/auth/hooks/use-oauth";

const App = () => {
  const { setOauthUser } = useOauth();
  //check if token get for oauth
  const tokenFromURL = new URLSearchParams(window.location.search).get(
    "access_token"
  );
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    if (tokenFromURL) {
      const userData = {
        name: params.get("name")?.replace(/\n/g, "").trim() ?? undefined,
        email: params.get("email")?.replace(/\n/g, "").trim() ?? undefined,
        user_details: {
          profile_filename:
            params.get("picture")?.replace(/\n/g, "").trim() ?? undefined,
        },
      };
      setOauthUser(tokenFromURL, userData);
    }
  }, [tokenFromURL, setOauthUser]);

  return <Fragment></Fragment>;
};

export default App;
