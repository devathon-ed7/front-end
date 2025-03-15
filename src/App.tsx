import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOauth } from "./modules/auth/hooks/use-oauth";

const App = () => {
  const { setOauthUser } = useOauth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Extract parameters only if they exist
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("access_token");
    
    if (tokenFromURL) {
      const userData = {
        full_name: params.get("name") || undefined,
        email: params.get("email") || undefined,
        user_details: {
          profile_filename: params.get("picture") || null, 
        },
      };
      
      setOauthUser(tokenFromURL, userData);
      navigate("/home");
    }
  }, [navigate, setOauthUser]);

  return null; // More efficient than empty Fragment
};

export default App;