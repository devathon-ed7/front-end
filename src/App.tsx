import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";



const App = () => {
  const setStatus = useAuthStore((state) => state.setStatus);
  //const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();
  const tokenFromURL = new URLSearchParams(window.location.search).get('access_token');
  
  useEffect(() => {
    if (tokenFromURL) {
      console.log("Token from URL:", tokenFromURL);
      setStatus("authenticated");
      setToken(tokenFromURL);
      navigate("/home");   
    }
  }, [tokenFromURL, setStatus, setToken,navigate]);



  return (
    <Fragment>
      
    </Fragment>
  );
}

export default App;
