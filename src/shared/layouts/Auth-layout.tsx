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
      <div  className="flex flex-col items-center pt-12 h-screen w-screen gap-4 lg:gap-8 text-[0.6875em] lg:text-base">{children}</div>
    </Fragment>
  );
};

export default AuthLayout;
