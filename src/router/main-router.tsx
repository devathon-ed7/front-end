import { Routes } from "react-router-dom";
import renderRoutes  from "./render-router";


const MainRouter = () => {
  return (
    <>
      <Routes>
        {renderRoutes()}
      </Routes>
    </>
  );
};

export default MainRouter;
