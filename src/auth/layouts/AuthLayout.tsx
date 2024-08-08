import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import BackGroundImage from "../assets/BackGroundImage.png";

interface Props {
  children: React.ReactNode;
  sxProps?: SxProps;
}

export const AuthLayout = ({ children, sxProps }: Props) => {
  return (
    <>
      <img
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          zIndex: "-100000",
        }}
        src={BackGroundImage}
      />
      <Box sx={{ ...sxProps }}>{children}</Box>
    </>
  );
};
