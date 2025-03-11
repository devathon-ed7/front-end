import { Fragment, ReactNode } from "react";
import BackGroundImage from "@/assets/BackGroundImage.webp";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Fragment>
      <img
        className="fixed top-0 left-0 object-cover w-full h-full z-[-100000] bg-center bg-no-repeat"
        src={BackGroundImage}
        loading="lazy"
        alt="background"
      />
      {children}
    </Fragment>
  );
};

export default AuthLayout;
