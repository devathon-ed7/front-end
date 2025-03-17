import BackGroundImage from "@/assets/BackGroundImage.webp";
import { Fragment, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Fragment>
      <img
        className="fixed top-0 left-0 object-cover w-full h-full z-[-100000] bg-center bg-no-repeat"
        src={BackGroundImage}
        loading="eager"
        decoding="async"
        fetchPriority="high" 
        alt="background"
        width="1920"
        height="1080"
      />
      {children}
    </Fragment>
  );
};

export default AuthLayout;